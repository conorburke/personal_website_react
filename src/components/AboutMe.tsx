import React from 'react';

import yoda from '../images/yoda.jpg';

const AboutMe: React.FC = () => {
  
  return (
    <div>
      <h1>About Me</h1>
      <div className='component-div' style={{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{flex: 1, paddingLeft: '20px', paddingRight: '20px'}}>
          <p>
            Currently living in Yokosuka, Japan, I am a graduate student at Georgia Tech studying computer
            science and artificial intelligence. I work for Booz Allen Hamiltion where I am currently on
            an education leave of absence. My most recent project was working on a big data platform
            and cyber awareness tool for the US Navy at the Space and Naval Warfare Systems
            Command in San Diego, CA. I worked on that project for 2 and a half years and left in August 
            when my family and I moved to Japan.
          </p>
          <p>
            I have experience working on both the frontend and backend of complex, distributed systems. 
            Most of my professional experience has involved working with JavaScript/TypeScript and Java. I
            also started working with Go and Python at my recent project, and have used all of these technologies 
            on personal projects. I really value using containerization (Docker) for development, prioritizing
            testing, and modularizing code to develop robust microservices. I am particularly fond of working 
            with large amounts of data, modeling it, and developing ETL pipelines for that data.
          </p> 
          <p>
            I get to enjoy life with my wife Claire, a nurse in the Navy Nurse Corps, and our young 
            son Ronan, as well as our two Boston Terriers, Bailey and Cali. In my free time
            I enjoy reading to my son, playing legos with him, hiking/camping, playing guitar, and boxing.
            Oh and of course the hobby I am best at, wasting time on YouTube.
          </p>
        </div>
        <div className='picture-div' style={{flex: 1, maxWidth: '50%'}}>
            <img src={yoda} alt='Yoda.' style={{ maxWidth: '50%', border: '2px solid whitesmoke', borderRadius: '10px'}}/>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;