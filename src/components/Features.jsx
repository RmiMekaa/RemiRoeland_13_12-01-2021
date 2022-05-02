import React from 'react';
import { FeatureCard } from './FeatureCard';

/**
 * Features section component
 * @returns {React.ReactElement} 
 */
export function Features() {
  return (
    <section className='features'>
      <h2 className='sr-only'>Features</h2>
      <FeatureCard
        type="chat"
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureCard
        type="money"
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureCard
        type="security"
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  )
}
