import React from "react";
import connectImg from './Images/icons8-facebook-48.png';
import connectImg1 from './Images/icons8-x-48.png';
import connectImg2 from './Images/icons8-instagram-48.png';
import connectImg3 from './Images/icons8-linkedin-48.png';
import connectImg4 from './Images/icons8-youtube-48.png';


const Footer=() => {
  return (
    <div className="Footer">
      <h3 className="Footer-title">Follow Us In Our Social Media </h3>
       
      <ul>
        <img src={connectImg} alt="facebook-logo"/>
        <li className="social-icons" >Facebook</li>
        <img src={connectImg1} alt="x-logo"/>
        <li className="social-icons">X</li>
        <img src={connectImg2} alt="instragrm-logo"/>
        <li className="social-icons" >Instagram</li>
        <img src={connectImg3} alt="linkedin logo" />
        <li className="social-icons">Linkedin</li>
        <img src={connectImg4} alt="youtube-logo"/>
        <li className="social-icons">Youtube</li>
      </ul>
       </div>
    
  );
}

export default Footer;