import Layout from '../../components/Layout'
import { projectsInfos } from '../../data'
// import styles from '../../styles/Home.module.css'
import {front,back} from '../../public/data/techData.js'
import TechCard from '../../components/TechCard.js';
import styles from '../../styles/Fullhouse.module.css'
import Link from 'next/link';
import Carousel from '../../components/Carousel';

// import { Stack } from "@mui/material";

export async function getStaticPaths() {
  const paths=[
    {
      params: {
        id: 'fullhouse'
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
    <div className={''}>
      <div className='flex'>
      <div className='basis-1/2  bg-white sm:flex hidden flex-col justify-center'>
        <img className='m-3' src={data.imgs[0]} alt="" />
      </div>
      <div className={`sm:basis-1/2 flex justify-center items-center ${styles.fullhouse}  `}>
        <div className='mt-8'>
              <div className={styles.container} >
                <div className='flex flex-col justify-around h-full'>
                  <h1 className={`${styles.title} text-black`}> {data.title}</h1>
                  
                  <p className={styles.description}>{data.description}</p>
                  <ul className='list-disc mb-14'>
                  {data.fctList.map((fct,index)=>{
                  return(
                      <li key={index}>
                        {fct}
                      </li>)
                    })}
                  </ul>
                  <ul className='mb-8'>
                  <h3 className='text-4xl mb-6'>Technologies used:</h3>
                <div className={""}>
               <h2 className='font-bold text-center text-black text-3xl '>Front-End</h2>
              <Carousel hidden={true} array={front} />
              <TechCard hidden={true} projectPage={true} array={filteredFront}/>
            </div>
            <div className={"mt-10"}>
              <h2 className='font-bold text-center text-black text-3xl '>Back-End</h2>
              <Carousel hidden={true}  array={back} />
              <TechCard projectPage={true} array={filteredBack}/>
            </div>

            </ul>
          </div>
          <div className=' flex flex-col gap-y-4 mb-8 bg-pink-100 p-3 rounded'>

            <div className='text-center '>To test the admin functionalities, go to the /login page and use:</div>
            <div className='flex flex-col items-center'>
              <div>Email : test@gmail.com</div>
              <div>Pasword  
                : pasword</div>
            </div>

          </div>
   

              <div className='mb-24 flex w-full justify-center gap-x-6'>
                <Link passHref href={'https://github.com/allaoua-rico/full-house-heroku'}>
                  <a className="hover:cursor-pointer hover:bg-white bg-neutral-200  font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Github
                    </a>
                  
                </Link>
                <Link passHref href={'https://fullhouse-project.herokuapp.com/'}>
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