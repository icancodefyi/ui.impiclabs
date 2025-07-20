'use client';

import React from 'react';
import AnimatedOceanWaves from './animated-ocean-waves';

export default function AnimatedOceanWavesDemo() {
  return (
    <div 
      className="relative w-full h-[400px] bg-gradient-to-b from-sky-200 to-blue-400 rounded-lg overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #87CEEB 0%, #4682B4 100%)' }}
    >
      {/* Content above waves */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Ocean Waves</h2>
          <p className="text-lg opacity-90">Beautiful animated waves effect</p>
        </div>
      </div>
      
      {/* Animated Ocean Waves */}
      <AnimatedOceanWaves
        height="60%"
        oceanBackground="rgba(70, 130, 180, 0.3)"
        waveDuration={8}
        waveOffset={25}
        frontWaveOpacity={0.9}
        backWaveOpacity={0.7}
      />
    </div>
  );
}
