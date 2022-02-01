import Link from 'next/link';
import React from 'react';
import LinkedIn from '../public/svg/Linkedin' 
import Facebook from '../public/svg/Facebook' 

export default function Footer() {
  return (<div className='h-28 mt-10 flex justify-center items-center gap-x-5' style={{background:'#324766',width:'100%'}}>
      <Link passHref href='https://www.linkedin.com/in/allaoua-boudriou-736569208/'>
          <a className='hover:cursor-pointer hover:fill-white'><LinkedIn/></a>
        
      </Link>
      <Link passHref href='https://www.facebook.com/allaoua.boudriou/'>
        <a className='hover:cursor-pointer hover:fill-white'><Facebook/></a>
      </Link>
  </div>);
}
