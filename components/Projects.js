import Link from "next/link";
import React from "react";
import styles from "../styles/Projects.module.css";
import { projectsInfos } from "../data";
import { FiGithub,FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <div
      className="lg:px-0 px-5 flex flex-col justify-center gap-y-5 items-center pt-6 text-white w-screen lg:w-full max-w-[1000px] rounded-xl"
      // style={{background:'#5E93AD'}}
    >
      <h2 className={styles.title}>Projects</h2>
      <div className=" flex flex-col justify-center items-center gap-y-5">
        {/* <div className={styles.card}> */}
        <div className="flex flex-col items-center gap-y-5 my-24">
          <div className="flex flex-row  ">
            <div className="basis-2/3">
              <Link passHref href={"/project/fullhouse"}>
                <a className="hover:cursor-pointer relative flex group">
                  <img className="rounded-md z-10" src="/e-shop2.png" />
                  <div className="group-hover:opacity-0 transition-all duration-500 w-full h-full absolute bg-[#8B93AD] opacity-50 top-0 z-20"></div>
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex flex-col items-end justify-between ">
              <div className="flex flex-col items-end">
                <h3 className="text-[#85E9D9]">MERN-stack CRUD project</h3>
                <h3 className="text-2xl ">Norda Clone</h3>
              </div>
              <div className="bg-[#2f4a68] p-6 right-0 w-[145%] rounded-xl pl-9 z-30">
                <div className="text-white font-semibold">
                  E-Commerce application made from scratch
                </div>
                <ul className="list-disc">
                  {projectsInfos[0].fctList?.map((el) => {
                    return (
                      <li className="text-white">
                        <div className="text-[#d4d9e8]">{el}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-y-5">
                <div className="text-[#99A2BE] flex gap-x-3">
                  <div>NextJs</div>
                  <div>TailwindCss</div>
                  <div>Mongoose</div>
                </div>
                <div className=" flex w-full justify-end gap-x-6">
                  <Link
                    passHref
                    href="https://github.com/allaoua-rico/full-house-heroku"
                  >
                    <a>
                      <FiGithub className="w-5 h-5 stroke-[#8B93AD] hover:stroke-[#a8dadc] transition-all duration-300" />
                    </a>
                  </Link>
                  <Link passHref href={"https://fullhouse-deco.herokuapp.com/"}>
                    <a><FiExternalLink className='w-5 h-5 stroke-[#8B93AD] hover:stroke-[#a8dadc] transition-all duration-300'/></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <Link passHref href={'/project/fullhouse'}>
                        <a
                        className=" hover:bg-gray-700 sm:text-xl text-3xl font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        color='primary' variant="outlined">
                            Details
                        </a>
                    </Link> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
