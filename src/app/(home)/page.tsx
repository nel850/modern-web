import React from 'react'
import styles from '../style';
import FirstSection from './hero';
import {Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Testimonials, } from '@/components';

const Home = () => {
  return (
    <main className='bg-primary w-full overflow-hidden'>

  <FirstSection />
  
  <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>

      <div className={`${styles.boxWidth}`}>

      <Stats />
      <Business />
      <Billing />

        <CardDeal />
       
        <Testimonials />
        <Clients />
        <CTA />
      
       

      </div>
    </div>
    
    </main>
    
  )
}

export default Home
