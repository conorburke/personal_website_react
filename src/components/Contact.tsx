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
            I am scheduled to graduate with my MSCS from Georgia Tech in December 2021. My family and I will be moving to the
            northern Virginia area in spring 2022 and I will be looking for a new job at that point.
            I will be interested in full time positions, ideally that are cleared and involve working with big data.
            I am particularly interested in aerospace companies and/or positions that involve cloud and containerization technologies. 
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