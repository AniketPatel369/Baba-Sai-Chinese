import React from 'react';
import Image from 'next/image';
import { PureVegIcon } from './icons/PureVegIcon';

export function Header() {
  return (
    <header className="py-12 md:py-16 text-center flex flex-col items-center">
      <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary tracking-wider uppercase">
        BABA SAI CHINESE
      </h1>
      <div className="flex items-center gap-3 mt-3">
        <p className="text-lg md:text-xl text-muted-foreground uppercase font-sans tracking-widest">
          Home Like Food
        </p>
        <PureVegIcon className="w-8 h-8" />
      </div>
    </header>
  );
}
