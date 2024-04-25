import React,{useState,useEffect} from 'react';
import "./Nav.css"


function Nav(){
    const [show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
        });
        return () => {
          window.removeEventListener("scroll");
        };
      }, []);

    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="robinhood"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
            alt="netflix is bad"
            />
            <img
            className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="Netflix Logo"
            />

        </div>

    )
}

export default Nav