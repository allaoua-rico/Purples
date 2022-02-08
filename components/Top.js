import Image from 'next/image';
import React from 'react';
import Laptop from '../public/svg/Laptop'
// import laptopPng from '../public/svg/Laptop'
import styles from "../styles/Top.module.css"
export default function Top() {

  return (
  <div className={ " text-white sm:text-6xl text-3xl leading-normal sm:leading-relaxed sm:font-bold font-medium py-10 mt-20 flex flex-col  gap-y-28 lg:flex-row lg:justify-center gap-x-32  lg:w-full overflow-hidden"}>
      <div 
      className={`mx-auto lg:mx-px pl-4 flex flex-col justify-center ${styles.topContainer}`}
      >
        <div>
        Hello,
        </div> 
        <div>
        I am Allaoua,
        </div>  
         <div>
         A 
        <span> MERN stack </span>
          developer
          </div>
      </div>
      <div className='relative lg:w-1/4 flex flex-col justify-center items-center'>
      <Laptop/>

      <div 
      className='w-fit absolute '
      >
        <div className={'text-black lg:text-2xl xl:text-3xl'}>
        <h1 className={styles.typewriter}>
          hello world!
        </h1>
        </div>
      </div>
 
      </div>
    </div>);
}
