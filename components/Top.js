import Image from 'next/image';
import React from 'react';
import Laptop from '../public/svg/Laptop'
// import laptopPng from '../public/svg/Laptop'
import styles from "../styles/Top.module.css"
export default function Top() {

  return (
  <div className={ " text-white sm:text-6xl text-3xl leading-normal sm:leading-relaxed sm:font-bold font-medium py-10 mt-20 flex flex-col justify-between gap-y-28 sm:justify-center"}>
      <div 
      className={`mx-auto pl-4  ${styles.topContainer}`}
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
      <div className='relative overflow-hidden flex flex-col justify-center items-center'>
      <Laptop/>

      <div 
      className='w-fit absolute'
      >
        <div className={'text-black'}>
        <h1 className={styles.typewriter}>
          hello world!
        </h1>
        </div>
      </div>
 
      </div>

    {/* <img src="../public/svg/laptopPng.svg" alt="" />   */}
    {/* <Image src="/../public/svg/laptopPng.svg" 
     width={500}
      height={500}>

    </Image> */}
    {/* <object type="image/svg+xml" data="/../public/svg/laptopPng.svg">
     
    </object> */}
    </div>);
}
