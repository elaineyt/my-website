import React from 'react';
import './Links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Links() {

    library.add(fab, faEnvelope)

    return (
          <div className='linksContainer'>
          <a href="mailto: elaineyt@usc.edu">
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="white"/>   
          </a>
          
          <a href="https://github.com/elaineyt" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="white"/>
          </a>
          <a href="https://www.linkedin.com/in/elaineytran/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" color="white"/>
          </a>
          <a href="https://www.instagram.com/elaineytran/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="white"/>
          </a>

          </div>
    )
}

export default Links