"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from 'react';
import styles from './style';
import Navbar from '../components/Navbar'

const Header = () => {
  return (
   
      <div className={`bg-primary w-full overflow-hidden ${styles.paddingX} ${styles.flexCenter}`}>

        <div className={`${styles.boxWidth}`}>
<Navbar/>
        </div>
      </div>
    

   
  )
}

export default Header


