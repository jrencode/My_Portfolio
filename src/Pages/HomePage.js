import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am 
          <span> Ren</span>
        </h1>
        <p className="h-sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Officia consectetur, sapiente illo dolores quos 
          consequatur dolorem nesciunt ipsa vitae ipsam eos 
          architecto illum iure alias cum rerum vero totam 
          voluptatem!
        </p>
        <div className="icons">
          <Link>
            <FontAwesomeIcon icon={faFacebook} className="fb icon" />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faGithub} className="gh icon"/>
          </Link>
          <Link>
            <FontAwesomeIcon icon={faYoutube} className="yt icon"/>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default HomePage;