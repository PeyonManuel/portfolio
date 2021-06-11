import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { fadeInLeftOnScroll, fadeUpLessOnScroll } from './Utilities';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(-1);

  useEffect(() => {
    function scrollHandler() {
      var projectsHeader = document.getElementById('projects-header');
      fadeInLeftOnScroll(projectsHeader);
      var projects = document.querySelectorAll('.project');
      projects.forEach((project) => {
        fadeUpLessOnScroll(project);
      });
    }
    document.body.addEventListener('scroll', scrollHandler);
    return () => {
      document.body.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <div className='projects-container'>
      <h1 id='projects-header'>Proyectos</h1>
      <div className='projects'>
        <div
          className='project'
          id='mercado-libre'
          onClick={() => {
            setSelectedProject(0);
          }}
        >
          <div className='img-container'>
            <div />
          </div>
          <div className='project-name'>
            <p>Mercado libre clone</p>
          </div>
        </div>
        <div
          className='project'
          id='moviezz'
          onClick={() => {
            setSelectedProject(1);
          }}
        >
          <div className='img-container'>
            <div></div>
          </div>
          <div className='project-name'>
            <p>Moviezz</p>
          </div>
        </div>
        <div
          className='project'
          id='recipe-finder'
          onClick={() => {
            setSelectedProject(2);
          }}
        >
          <div className='img-container'>
            <div />
          </div>
          <div className='project-name'>
            <p>Recipe finder</p>
          </div>
        </div>

        <div
          className='project'
          id='drum-machine'
          onClick={() => {
            setSelectedProject(3);
          }}
        >
          <div className='img-container'>
            <div />
          </div>
          <div className='project-name'>
            <p>Drum machine</p>
          </div>
        </div>
        <div
          className='project'
          id='javascript-calculator'
          onClick={() => {
            setSelectedProject(4);
          }}
        >
          <div className='img-container'>
            <div />
          </div>
          <div className='project-name'>
            <p>Javascript calculator</p>
          </div>
        </div>
        <div
          className='project'
          id='portfolio'
          onClick={() => {
            setSelectedProject(5);
          }}
        >
          <div className='img-container'>
            <div />
          </div>
          <div className='project-name'>
            <p>Portfolio</p>
          </div>
        </div>
        {selectedProject > -1 && (
          <ProjectCard
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
