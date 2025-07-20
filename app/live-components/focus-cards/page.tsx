'use client';

import React from 'react';
import FocusCards from '../../../registry/components/focus-cards/focus-cards';

const cards = [
  {
    title: "Forest Adventure",
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Valley of Life",
    src: "https://images.unsplash.com/photo-1600271778552-38096d6cbe1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
  },
  {
    title: "Mountain Peak",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

export default function FocusCardsPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Focus Cards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hover over the cards to see the focus effect
          </p>
        </div>
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}
