import Link from 'next/link';
import React from 'react';
import styles from '../styles/Projects.module.css'


export default function Projects() {
    return (
    <div 
    className='border flex flex-col justify-center gap-y-5 items-center pt-6 text-white w-screen lg:w-auto rounded-xl'
    // style={{background:'#5E93AD'}}
    >
        <h2 className={styles.title}>Projects</h2>
        <div  className='max-w-4xl flex flex-col justify-center items-center gap-y-5'>
            <div className={styles.card  }>
                <div className='flex flex-col items-center gap-y-5'>
                <h3 className='text-2xl'>Fullhouse Deco</h3>

                <Link passHref href={'/project/fullhouse'}>
                    <a className='hover:cursor-pointer'>
                        <img src="/fullhouse_home_page1.png"/>
                    </a>
             
                </Link>
                    <Link passHref href={'/project/fullhouse'}>
                        <a
                        className=" hover:bg-gray-700 sm:text-xl text-3xl font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        color='primary' variant="outlined">
                            Details
                        </a>
                    </Link>
                </div>
      

            </div>
        </div>
    </div>
    )
}
