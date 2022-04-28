import Link from "next/link";
import React from "react";
import styles from "../styles/Projects.module.css";
import { projectsInfos } from "../data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <div
      className="lg:px-0 px-5 flex flex-col justify-center gap-y-5 items-center pt-6 text-white w-screen lg:w-full max-w-[1000px] rounded-xl"
      // style={{background:'#5E93AD'}}
    >
      <h2 className={styles.title}>Projects</h2>
      {/* <div className=" flex flex-col justify-center items-center gap-y-5"> */}
      {/* <div className="flex flex-col items-center "> */}

      <div className="flex flex-row gap-y-5 my-24 relative ">
        <div className="md:basis-2/3 w-full h-full absolute md:static">
          <Link passHref href={"https://ab-e-shop.herokuapp.com/"}>
            <a className="hover:cursor-pointer relative flex group h-full">
              <img
                className="rounded-md z-10 object-cover w-full h-full"
                src="/e-shop2.png"
              />
              <div className="group-hover:opacity-0 transition-all duration-500 w-full h-full absolute bg-[#8B93AD] opacity-50 top-0 z-20"></div>
            </a>
          </Link>
        </div>
        <div className="md:basis-1/3 basis-3/3 flex flex-col md:items-end justify-between p-8  z-30 bg-[#2f4a68] opacity-95 md:opacity-100 md:bg-transparent h-full md:h-auto">
          <div className="flex flex-col md:items-end">
            <h3 className="text-[#85E9D9]">MERN-stack CRUD project</h3>
            <h3 className="text-2xl ">Norda</h3>
          </div>
          <div className="bg-[#2f4a68] opacity-95 p-6 right-0 md:w-[145%] rounded-md pl-9 z-30 w-full">
            <div className="text-white font-semibold">
              E-Commerce application made from scratch
            </div>
            <ul className="list-disc">
              {projectsInfos[0].fctList?.map((el, index) => {
                return (
                  <li key={index + "el"} className="text-white">
                    <div className="text-[#d4d9e8]">{el}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-y-5  opacity-95 md:opacity-100 md:bg-transparent w-full">
            <div className="text-[#99A2BE] flex gap-x-3 md:justify-end">
              <div>NextJs</div>
              <div>TailwindCss</div>
              <div>Mongoose</div>
            </div>
            <div className="flex w-full md:justify-end gap-x-6">
              <Link
                passHref
                href="https://github.com/allaoua-rico/e-shop/tree/main"
              >
                <a>
                  <FiGithub className="w-5 h-5 stroke-[#8B93AD] hover:stroke-[#85E9D9] transition-all duration-300" />
                </a>
              </Link>
              <Link passHref href={"https://ab-e-shop.herokuapp.com/"}>
                <a>
                  <FiExternalLink className="w-5 h-5 stroke-[#8B93AD] hover:stroke-[#85E9D9] transition-all duration-300" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
