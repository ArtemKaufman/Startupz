import React from 'react';
import { Container } from '../../UI/Container';
import { Title } from '../../UI/Title';
import { data } from './data';
import { ProjectCard } from './ProjectCard';
import { OrangTitle } from '../../UI/OrangTitle';

export const OurWorks = () => {
  const projects = data.map((project) => (
    <ProjectCard
      img={project.img}
      desc={project.description}
      title={project.title}
      color={project.color}
    />
  ));
  return (
    <Container className="pt-[140px] flex flex-col justify-center items-center">
      <Title text="Our works" />
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 mt-[55px] mb-[100px] md:mb-[180px]">
        {projects}
      </div>
      <div className="mb-[100px] md:mb-[180px] text-center flex items-center gap-[25px]">
        <img src="../images/like-left.png" />
        <div className="max-w-[882px]">
          <OrangTitle text="Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity." />
        </div>
        <img src="../images/like-right.png" />
      </div>
    </Container>
  );
};
