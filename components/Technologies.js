import Image from 'next/image';
import React from 'react';
import {front,back} from '../public/data/techData.js'
import Carousel from './Carousel.js';
import styles from '../styles/Home.module.css'
import TechCard from './TechCard.js';


export default function Technologies() {
  return (
    <div className='flex flex-col items-center gap-y-14 '>
      <div className='flex flex-col items-center gap-y-11'>
          <h2 className={` text-5xl sm:text-6xl `}>
          Technologies
        </h2> 
        <p className='ml-2 mb-4 text-2xl  text-center'>
          The technologies i work with are the following:
        </p>
      </div>

    <div className='flex flex-col  pt-6 justify-center gap-y-5 items-center w-screen lg:w-auto  rounded-xl bg-white ' 
  // style={{background:"#F1FAEE"}}
  >

  
    <div className='w-full flex flex-col justify-center items-center sm:gap-y-20 sm:p-32 py-16  ' >
      {/* <div className={`${styles.card } w-full mx-1 sm:w-auto ` }> */}
        <h2 className='font-bold text-center text-black text-3xl '>Front-End</h2>
        <Carousel hidden={true} array={front} />
        <TechCard hidden={true}  array={front}/>
      {/* </div> */}

      {/* <div className={`${styles.card } w-full sm:w-auto`}> */}
        <h2  className='font-bold text-center text-black text-3xl mt-10'> Back-End</h2>
        <Carousel hidden={true} array={back} />
        <TechCard hidden={true} array={back}/>
      {/* </div> */}
    </div>
  </div>
    </div>
  );
}
