import React, { useEffect } from 'react';

const PersonalInfo = () => {
  return (
    <>
      <div className='personal-info'>
        <img
          hidden
          src='https://i.imgur.com/mUXcOFd.jpeg'
          alt='.'
          onLoad={() => {
            document.querySelector('header').classList.add('loaded');
            document
              .querySelector('.personal-info')
              .classList.add('fade-right');
            document.querySelector('header p').classList.add('fade-left');
            document.querySelector('header h1').classList.add('fade-right');
            setTimeout(() => {
              document
                .querySelector('.projects-dive-in-line')
                .classList.add('fade-up');
              setTimeout(() => {
                document
                  .querySelector('.projects-dive-in-line button')
                  .classList.add('fade-down');
              }, 900);
            }, 1000);
          }}
        />
        <h1>Manuel Peyon</h1>
        <p>Web developer</p>
        <div id='social-media-links' className='row'>
          <a
            href='https://github.com/PeyonManuel'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/manuel-peyon-2414921b9/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://codepen.io/Umim' target='_blank' rel='noreferrer'>
            <i className='fab fa-codepen'></i>
          </a>
          <a
            href='https://drive.google.com/file/d/1KsFz3kPD7hh0xgQoSmfvjjzkezcqwF6N/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fas fa-user'></i>
          </a>
        </div>
      </div>

      <div className='projects-dive-in-line'>
        <button
          onClick={() => {
            document.querySelector('.projects-container').scrollIntoView();
          }}
        >
          Proyectos
        </button>
      </div>
    </>
  );
};

export default PersonalInfo;
