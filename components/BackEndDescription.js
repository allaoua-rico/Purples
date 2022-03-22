import React from "react";
// import {SiExpress} from "react-icons/si";
import ExpressJS from "../public/svg/ExpressJs";
import { SiReact, SiNodedotjs } from "react-icons/si";
import NodeJs from "../public/svg/NodeJs";
import Nextjs from "../public/svg/Nextjs";

export default function BackEndDescription({ next }) {
  return (
    <div className=" leading-[1px]  mt-[-12px]">
      Using{" "}
      <ExpressJS className="animate-pulse inline stroke-white stroke-[5px] fill-white w-[70px] h-auto " />{" "}
      in association with React
      <SiReact className=" my-[-5px] mx-2 animate-[spin_4s_linear_infinite] inline w-6 h-auto stroke-white fill-white" />{" "}
      or the integrated Nodejs{" "}
      <SiNodedotjs className="fill-white my-[-5px]  stroke-white w-6 h-auto inline mx-1" />{" "}
      in
      <Nextjs className="stroke-white stroke-[5px]  my-[-5px]  fill-white w-12 h-6 mx-1 inline" />
      to:
      <ul className="list-disc gap-y-2 flex flex-col text-[#BEC6DD] leading-relaxed mt-4">
        <li className="">Secure user authentication with JWT.</li>
        <li className="">Secure endpoints from user actions (CRUD) with user roles authorisations & JWT.</li>
        <li className="">Communicate with the DB.</li>
        <li className="">Upload images from user using Multer.</li>
        <li className="">Upload the images to Cloudinary and store their links to the DB.</li>


      </ul>
    </div>
  );
}
