import React from 'react';
import Image from 'next/image';

export function Header() {
  return (
    <header className="py-12 md:py-16 text-center flex flex-col items-center">
      <Image src="/logo.png" alt="Baba Sai Chinese Logo" width={80} height={80} className="mb-4" />
      <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary tracking-wider uppercase">
        BABA SAI CHINESE
      </h1>
      <p className="mt-3 text-lg md:text-xl text-muted-foreground uppercase font-sans tracking-widest">
        Home Like Food
      </p>
    </header>
  );
}
