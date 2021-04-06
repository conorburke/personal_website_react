import React from 'react';

import yoda from '../images/yoda.jpg';

const AboutMe: React.FC = () => {
  
  return (
    <div>
      <h1>About Me</h1>
      <div className='component-div' style={{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{flex: 1, paddingLeft: '20px', paddingRight: '20px'}}>
          <p>
            I am a graduate student at Georgia Tech studying computer science and artificial intelligence. 
            I have worked as a software engineer for both General Dynamics (GDIT) and for Booz Allen Hamiltion.
            The projects I worked on involved creating data pipelines to read, extract, and transform data so that 
            the user could visualize vital information about their operating environment.
            I have a current Top Secret clearance and have worked on SCI programs.
            Additionally, I am a certified AWS Solutions Architect and have my Security+ certification.  
          </p>
          <p>
            I have experience working on both the frontend and backend of complex, distributed systems. 
            Most of my professional experience has involved working with Java, C#, and JavaScript/TypeScript. I
            also have used Python, C, and Go for academic and personal projects. 
            I highly value prioritizing testing, automating workflows, and modularizing code to develop robust microservices 
            with containerization (Docker) technologies. 
            I am particularly fond of working with large amounts of data, modeling it, and developing ETL pipelines for that data.
          </p> 
          <p>
            I get to enjoy life with my wife Claire, a nurse in the Navy Nurse Corps, and our young 
            sons Ronan and Liam, as well as our two Boston Terriers, Bailey and Cali. In my free time
            I enjoy reading to my sons, playing legos with them, hiking/camping, playing guitar, and boxing.
            Oh and of course the hobby I am best at, wasting time on YouTube.
          </p>
        </div>
        <div className='picture-div' style={{flex: 1, maxWidth: '50%'}}>
            <img className='me-pic' src={yoda} alt='Yoda.' style={{ maxWidth: '50%', border: '2px solid whitesmoke', borderRadius: '10px'}}/>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;