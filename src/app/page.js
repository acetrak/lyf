'use client';

import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="relative">
      <img alt="" src="/flower.jpg" className="w-screen h-screen absolute top-0 left-0 object-cover" />
      <div className=" z-10 relative backdrop-blur-lg bg-black/20">
        <div className="flex flex-row items-center min-h-screen justify-center">
          <h1 className="text-3xl md:text-7xl">丫头,</h1>
          <div className="flex flex-col ">
            <h3 className=" ml-4 text-xl md:text-4xl">每天早上要吃早餐呀~~</h3>
            <h3 className=" ml-4 text-xl md:text-4xl">记得喝水哦~</h3>
          </div>

        </div>
      </div>
    </div>

  );
}
