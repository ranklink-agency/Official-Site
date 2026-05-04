'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SiteLogoProps {
  src: string;
  domain: string;
}

export default function SiteLogo({ src, domain }: SiteLogoProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span className="text-gray-400 font-bold text-sm">
        {domain?.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={domain}
      width={96}
      height={64}
      className="max-w-full max-h-full object-contain"
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
