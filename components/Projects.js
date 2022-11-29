import Link from "next/link";
import React from "react";
import styles from "../styles/Projects.module.css";
import { projectsInfos } from "../data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section className="lg:px-0 px-5 flex flex-col justify-center gap-y-5 items-center pt-6 text-white w-screen lg:w-full max-w-[1000px] rounded-xl">
      <h2 className={styles.title}>Projects</h2>
      <div className="flex flex-col items-center">
        {React.Children.toArray(
          projectsInfos.map((project) => (
            <div className="flex flex-row gap-y-5 my-24 relative">
              <ProjectImg src={project.imgs[0]} link={project.links.deployed} />

              <ProjectInfos>
                <ProjectTitles project={project} />

                <ProjectInfosCard>
                  <div className="text-white font-semibold">
                    {project.description}
                  </div>
                  <ProjectInfosFctsList list={project.fctList} />
                </ProjectInfosCard>

                <ProjectBottom>
                  <ProjectInfosTechsList list={project.techs} />
                  <ProjectInfosLink links={project.links} />
                </ProjectBottom>
              </ProjectInfos>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function ProjectBottom({ children }) {
  return (
    <div className="flex flex-col gap-y-5 opacity-95 md:opacity-100 md:bg-transparent w-full">
      {children}
    </div>
  );
}

function ProjectTitles({ project }) {
  return (
    <div className="flex flex-col md:items-end">
      <ProjectSubTitle>{project.subTitle}</ProjectSubTitle>
      <ProjectTitle>{project.title}</ProjectTitle>
    </div>
  );
}

function ProjectImg({ src, link }) {
  return (
    <div className="md:basis-2/3 w-full h-full absolute md:static">
      <Link passHref href={link}>
        <a className="hover:cursor-pointer relative flex group h-full">
          <img
            className="rounded-md z-10 object-cover w-full h-full"
            src={src}
          />
          <div className="group-hover:opacity-0 transition-all duration-500 w-full h-full absolute bg-[#8B93AD] opacity-50 top-0 z-20"></div>
        </a>
      </Link>
    </div>
  );
}

function ProjectInfosFctsList({ list }) {
  return (
    <ul className="list-disc">
      {React.Children.toArray(
        list?.map((el) => {
          return (
            <li className="text-white">
              <div className="text-[#d4d9e8]">{el}</div>
            </li>
          );
        })
      )}
    </ul>
  );
}

function ProjectInfosLink({ links }) {
  const className =
    "w-5 h-5 stroke-[#8B93AD] hover:stroke-[#85E9D9] transition-all duration-300";
    
  return (
    <div className="flex w-full md:justify-end gap-x-6">
      {links.github && (
        <Link passHref href={links.github}>
          <a>
            <FiGithub className={className} />
          </a>
        </Link>
      )}

      {links.deployed && (
        <Link passHref href={links.deployed}>
          <a>
            <FiExternalLink className={className} />
          </a>
        </Link>
      )}
    </div>
  );
}

function ProjectInfosTechsList({ list }) {
  return (
    <div className="text-[#99A2BE] flex gap-x-3 md:justify-end max-w-xs">
      {React.Children.toArray(list?.map((el) => <div>{el}</div>))}
    </div>
  );
}

function ProjectInfosCard({ children }) {
  return (
    <div className="bg-[#2f4a68] opacity-95 p-6 right-0 md:w-[145%] rounded-md pl-9 z-30 w-full">
      {children}
    </div>
  );
}

function ProjectInfos({ children }) {
  return (
    <div className="md:basis-1/3 basis-3/3 flex flex-col md:items-end justify-between p-8 z-30 bg-[#2f4a68] opacity-95 md:opacity-100 md:bg-transparent h-full md:h-auto">
      {children}
    </div>
  );
}

function ProjectSubTitle({ children }) {
  return <h3 className="text-[#85E9D9]">{children}</h3>;
}

function ProjectTitle({ children }) {
  return <h3 className="text-2xl">{children}</h3>;
}
