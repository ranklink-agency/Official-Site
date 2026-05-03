import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#FAFEFA] min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-lg">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <AlertTriangle className="w-12 h-12 text-orange-500" />
          </div>
          <h1 className="text-6xl font-extrabold text-slate-800 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Oops! You seem to be lost.</h2>
          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 uppercase tracking-wide"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
