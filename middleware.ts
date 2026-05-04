import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

const DASHBOARD_SEGMENT = 'ranklink-admin-9x7k2p';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith(`/${DASHBOARD_SEGMENT}`)) {
    return NextResponse.next();
  }

  const loginPath = `/${DASHBOARD_SEGMENT}/login`;
  const isLoginPage = pathname === loginPath;

  const response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  if (!user && !isLoginPage) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  if (user && isLoginPage) {
    return NextResponse.redirect(new URL(`/${DASHBOARD_SEGMENT}`, request.url));
  }

  return response;
}

export const config = {
  matcher: ['/ranklink-admin-9x7k2p/:path*'],
};
