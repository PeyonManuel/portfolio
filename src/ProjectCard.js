import React, { useEffect, useRef } from 'react';
import { projectsInfo } from './ProjectsInfo';

const ProjectCard = ({ selectedProject, setSelectedProject }) => {
  const cardRef = useRef();

  useEffect(() => {
    if (selectedProject !== -1) {
      document.body.scrollTo(0, 0);
      document
        .querySelector('.projects-dive-in-line')
        .classList.remove('fade-up');
      document.querySelector('header h1').classList.remove('fade-right');
      document.querySelector('header p').classList.remove('fade-left');
      document.querySelector('.personal-info').classList.remove('fade-right');
    }
  }, [selectedProject]);
  return (
    <div className='project-card-background'>
      <div className='project-card fade-up-less' ref={cardRef}>
        <button
          className='absolute-top-right'
          style={{
            color: projectsInfo[selectedProject].color,
            zIndex: 1,
          }}
          onClick={() => {
            document
              .querySelector('.project-card')
              .classList.remove('fade-up-less');
            document
              .querySelector('.project-card')
              .classList.add('fade-down-dissapear');
            document.querySelector('.projects-container').scrollIntoView();
            setTimeout(() => {
              document
                .querySelector('.project-card')
                .classList.remove('fade-down-dissapear');
              document
                .querySelector('.projects-dive-in-line')
                .classList.add('fade-up');
              document.body.style.overflowY = 'scroll';
              document.body.style.overflowX = 'hidden';
              document.querySelector('header h1').classList.add('fade-right');
              document.querySelector('header p').classList.add('fade-left');
              document
                .querySelector('.personal-info')
                .classList.add('fade-right');
              setSelectedProject(-1);
            }, 500);
          }}
        >
          <i
            className='fas fa-times fa-lg'
            style={{ textShadow: '2px 2px 5px black' }}
          ></i>
        </button>
        <div className='project-card-gif'>
          <img src={projectsInfo[selectedProject].gif} alt='Gif del proyecto' />{' '}
        </div>
        <div className='project-card-details-container'>
          <div
            className='project-card-details'
            style={{
              backgroundColor: projectsInfo[selectedProject].backgroundColor,
              color: projectsInfo[selectedProject].color,
            }}
          >
            <h4>Proyecto</h4>
            <h2>{projectsInfo[selectedProject].name}</h2>
            <div className='project-technologies'>
              {projectsInfo[selectedProject].technologies.map((technology) => (
                <div
                  key={technology}
                  className='project-technology'
                  style={{
                    color: projectsInfo[selectedProject].color,
                    border: '1px solid ' + projectsInfo[selectedProject].color,
                  }}
                >
                  {technology}
                </div>
              ))}
            </div>
            <h4>Acerca de</h4>
            <p>{projectsInfo[selectedProject].about}</p>
            {projectsInfo[selectedProject].features.length > 0 && (
              <>
                <h4>Funcionalidades principales</h4>
                <ul>
                  {projectsInfo[selectedProject].features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div
            className='project-card-see-code'
            style={{
              backgroundColor: projectsInfo[selectedProject].backgroundColor,
              color: projectsInfo[selectedProject].color,
            }}
          >
            <a
              href={projectsInfo[selectedProject].demo}
              className={
                'see-code-btn' +
                (projectsInfo[selectedProject].demo === 'none'
                  ? ' disabled'
                  : '')
              }
              target='_blank'
              rel='noreferrer'
              style={{
                color: projectsInfo[selectedProject].color,
                border: '1px solid ' + projectsInfo[selectedProject].color,
              }}
            >
              <i className='fas fa-eye'></i>Demo
            </a>
            <a
              href={projectsInfo[selectedProject].code}
              className='see-code-btn'
              target='_blank'
              rel='noreferrer'
              style={{
                color: projectsInfo[selectedProject].color,
                border: '1px solid ' + projectsInfo[selectedProject].color,
              }}
            >
              <i className='fas fa-code'></i>Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
