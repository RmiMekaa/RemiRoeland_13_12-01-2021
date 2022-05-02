import React from 'react';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';

/**
 * Home Page component
 * @returns {React.ReactElement} 
 */
export function HomePage() {

  return (
    <main className='HomePage'>
      <Hero />
      <Features />
    </main>
  )
}