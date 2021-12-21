import React from 'react';
import { Features } from '../components/Features/Features';
import { Hero } from '../components/Hero/Hero';

export function HomePage() {

  return (
    <main className='HomePage'>
      <Hero />
      <Features />
    </main>
  )
}