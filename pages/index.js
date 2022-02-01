import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Technologies from '../components/Technologies.js'
import Projects from '../components/Projects.js'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import {Contact} from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout>
      <Head >
        <title>AB&apos;s Portfolio</title>
        <meta name="description" content="BOUDRIOU ALLAOUA's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

    <div className='w-full flex flex-col items-center'>
      
      <Top />
      <hr id="tech" className='h-3 w-20 rounded-lg bg-gray-300 mb-12 mx-auto '/>
      <Technologies/>
      <hr id="projects" className='h-3 w-20 rounded-lg bg-gray-300 mb-12 mt-10 mx-auto'/>
      <Projects/>
      <hr id="contact" className='h-3 w-20 rounded-lg bg-gray-300 mb-12 mt-10 mx-auto'/>
      <Contact/>
    </div>
    <Footer>

    </Footer>
    </Layout>
  )
}
