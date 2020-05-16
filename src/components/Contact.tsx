import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import claire from '../images/claire.jpg';

const Contact: React.FC = () => {
  
  return (
    <div>
      <h1>Contact</h1>
      <div className='component-div' style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{flex: 1, paddingLeft: '20px', paddingRight: '20px'}}>
          <p style={{textAlign: 'center'}}>
              I can easily be reached by message through <a href="https://www.linkedin.com/in/conorburke89/" target="_blank"rel="noopener noreferrer" style={{fontWeight: 'bold', color: 'white'}}>LinkedIn<OpenInNewIcon style={{fontSize: 14}}/></a>, 
              but feel free to also e-mail me at 
              <a href="mailto:cjburke89@gmail.com" style={{fontWeight: 'bold', color: 'white'}}> cjburke89@gmail.com</a>.
          </p>
          <p style={{textAlign: 'center'}}>
            I am interested in remote jobs that are full time, part time, or contract. Jobs that focus on working on big data 
            are my preference. While I am somewhat agnostic about the tech stack, I have experience and would
            like to work on projects that incorporate Go, Python, and/or TypeScript.
          </p>
        </div>
        <div className='picture-div' style={{flex: 1, maxWidth: '100%'}}>
            <img className='me-pic' src={claire} alt='Wife.' style={{ maxWidth: '50%', border: '2px solid whitesmoke', borderRadius: '10px'}}/>
        </div>
      </div>
    </div>
  );
}

export default Contact;