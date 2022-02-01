import Layout from '../../components/Layout'
import { projectsInfos } from '../../data'
// import styles from '../../styles/Home.module.css'
import {front,back} from '../../public/data/techData.js'
import TechCard from '../../components/TechCard.js';
import styles from '../../styles/Fullhouse.module.css'
import Link from 'next/link';

// import { Stack } from "@mui/material";

export async function getStaticPaths() {
  const paths=[
    {
      params: {
        id: 'fullhouse'
      }
    },
    {
      params: {
        id: 'amazon-clone'
      }
    }
  ];
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  let projects=projectsInfos;
  const project=projects.filter(project=>{
    return project.id===params.id && project
  })
  const data =project[0]
  return {
    props: {
      data
    }
  }
}
export default function Project({data}) {
  // console.log(styles.container)
  let filteredFront=[]
   front.map(tech=>{
    let temp=data.techs.map(tech2=>{
      tech.name===tech2 && filteredFront.push(tech)
    })
  })
  let filteredBack=[]
  back.map(tech=>{
    return data.techs.map(tech2=>{
      tech.name==tech2 && filteredBack.push(tech)
    })
  })

  return (
    <div className={styles.fullhouse}>
      <div className=' flex '>
      <div className='basis-1/2  bg-white flex flex-col justify-center'>
        <img className='m-3' src={data.imgs[0]} alt="" />
      </div>
   <div className='basis-1/2  '>
   <div >
        <div className={styles.container} >
          <div className='flex flex-col justify-around h-full'>
            <h1 className={styles.title}> {data.title}</h1>
            
            <p className={styles.description}>{data.description}</p>
            <ul className='list-disc mb-14'>
            {data.fctList.map((fct,index)=>{
            return(
                <li key={index}>
                  {fct}
                </li>)
              })}
            </ul>
            <ul className='mb-12'>
            <h3 className='text-4xl mb-6'>Technologies used</h3>
            <div className={styles.card}>
            <TechCard projectPage={true} array={filteredFront}/>

            </div>
            <div className={styles.card}>
              <TechCard projectPage={true} array={filteredBack}/>

            </div>

            </ul>
          </div>
              <div className='flex w-full justify-center gap-x-6'>
                <Link passHref href={'/'}>
                  <a className="hover:cursor-pointer hover:bg-white bg-neutral-200  font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Github
                    </a>
                  
                </Link>
                <Link passHref href={'/'}>
                <a className="hover:cursor-pointer hover:bg-white bg-neutral-200 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Live
                </a>
                </Link>
              </div>
        </div>
      </div>
     
   </div>
      </div>
    </div>
  )
}