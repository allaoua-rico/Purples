import Image from 'next/image';
import React from 'react';
import {front,back} from '../public/data/techData.js'
import Carousel from './Carousel.js';
import styles from '../styles/Home.module.css'
import TechCard from './TechCard.js';


export default function Technologies() {
  return (
  <div className='flex flex-col  pt-6 justify-center gap-y-5 items-center w-fit rounded-xl bg-white' 
  // style={{background:"#F1FAEE"}}
  >
    <h2 className={styles.title}>
      Technologies
    </h2> 
    <p className='ml-2 mb-4 text-2xl text-zinc-400'>
      The technologies i work with are the following:
    </p>
    <div className='w-full flex flex-col justify-center items-center gap-y-5  '>
      <div className={styles.card  }>
        <h2 className='font-bold text-center'>Front-End</h2>
        <Carousel hidden={true} array={front} />
        <TechCard hidden={true}  array={front}/>
      </div>

      <div className={styles.card}>
        <h2  className='font-bold text-center'> Back-End</h2>
        <Carousel hidden={true} array={back} />
        <TechCard hidden={true} array={back}/>
      </div>
    </div>
  </div>);
}
