import React from 'react';

export function Header() {
  return (
    <header className="py-12 md:py-16 text-center">
      <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary tracking-wider uppercase">
        BABA SAI CHINESE
      </h1>
      <p className="mt-3 text-lg md:text-xl text-muted-foreground uppercase font-sans tracking-widest">
        Home Like Food
      </p>
    </header>
  );
}
