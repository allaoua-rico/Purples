import ReactJs from "../svg/Reactjs.js";
import NextJs from "../svg/Nextjs.js";
import Tailwind from "../svg/Tailwind.js";
import NodeJs from "../svg/NodeJs.js";
import ExpressJs from "../svg/ExpressJs.js";
import MongoDB from "../svg/MongoDB.js";
import Mongoose from "../svg/Mongoose.js";
import Mui from "../svg/Mui.js";
import { SiNextdotjs, SiNodedotjs } from "react-icons/si";
import FrontEndDescription from "../../components/NextJsDescription.js";
import BackEndDescription from "../../components/BackEndDescription.js";
import {SiExpress} from "react-icons/si";
import DBDescription from "../../components/DBDescription.js";

export const front = [
  { name: "React Js", component: <ReactJs /> },
  {
    name: "Next Js",
    component: <SiNextdotjs className="w-6 h-6" />,
    desc: <FrontEndDescription />,
  },
  { name: "Tailwind CSS", component: <Tailwind /> },
  { name: "Material UI", component: <Mui /> },
];
export const back = [
  {
    name: "Node Js",
    component: <SiNodedotjs className="w-6 h-6" />,
    desc: <BackEndDescription />,
  },
  { name: "Express Js", component: <SiExpress className="w-6 h-6"/> },
  { name: "MongoDB", component: <MongoDB /> },
  { name: "Mongoose", component: <Mongoose />,desc: <DBDescription />, },
];
