'use client';

import React from 'react';
import AnimatedOceanWaves from '../../../registry/components/ocean-waves/animated-ocean-waves';

export default function AnimatedOceanWavesPage() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-200 to-blue-500 relative overflow-hidden">
      {/* Content above waves */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Ocean Waves</h1>
          <p className="text-xl opacity-90">Animated ocean waves component</p>
        </div>
      </div>
      
      {/* Animated Ocean Waves */}
      <AnimatedOceanWaves
        height="50%"
        oceanBackground="rgba(30, 144, 255, 0.4)"
        waveDuration={7}
        waveOffset={23}
        frontWaveOpacity={1}
        backWaveOpacity={0.8}
      />
    </div>
  );
}
