'use client'

import confetti from 'canvas-confetti'
import { useEffect } from 'react';
export default function Home() {

  useEffect(() => {

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }, []);

  return (
    <div className="mx-auto container">
      <div className="flex flex-row items-center min-h-screen justify-center">
        <h1 className="text-3xl md:text-7xl">丫头,</h1> <h3 className=" ml-4 text-xl md:text-4xl">记得喝水哦~~</h3>
      </div>
    </div>
  );
}
