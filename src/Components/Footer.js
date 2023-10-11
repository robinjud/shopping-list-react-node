import React from "react";
import connectImg from './Images/icons8-facebook-48.png';
import connectImg1 from './Images/icons8-x-48.png';
import connectImg2 from './Images/icons8-instagram-48.png';
import connectImg3 from './Images/icons8-linkedin-48.png';
import connectImg4 from './Images/icons8-youtube-48.png';


const Footer=() => {
  return (
    <div className="Footer">
      <h3 className="Footer-title">Follow Us</h3>
       
      <ul className="social-icons-logos">
        
        <li className="social-icons" ><img src={connectImg} alt="facebook-logo"/>Facebook</li>
      
        <li className="social-icons"><img src={connectImg1} alt="x-logo"/>X</li>
       
        <li className="social-icons" > <img src={connectImg2} alt="instragrm-logo"/>Instagram</li>
        
        <li className="social-icons"><img src={connectImg3} alt="linkedin logo" />Linkedin</li>
    
        <li className="social-icons"><img src={connectImg4} alt="youtube-logo"/>Youtube</li>
      </ul>
       </div>
    
  );
}

export default Footer;