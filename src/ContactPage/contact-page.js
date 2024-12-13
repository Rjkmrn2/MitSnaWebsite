import React from 'react';
import GetInTouch from '../Component/GetInTouch.js';
import HomeSignUp from '../Component/HomeSignUp.js';
import ContactCard from '../Component/ContactCard.js';
import Navbar from '../Component/navbar.js';
import Mitsna from'../Component/MitSna.js';
function ContactPage(){
    return(
      
        <header>
            <div className='HomePage'>
              <Navbar/>
              <img src="./exmple.png" className='HomeImg'/> 
            </div>
            <div className="container-fluid">
              <div className='HomeSignUp row d-flex justify-content-center'>
                <div className="d-flex justify-content-center col-12 col-lg-6"><GetInTouch/></div>
                <div className="d-flex justify-content-center col-12 col-sm-11 col-md-10 col-lg-6 col-xl-5"><HomeSignUp/></div>
              </div>
            </div>
            <div className="container-fluid">
            <div className="Mitsna bg-green row d-flex justify-content-center">
              <div className="d-flex justify-content-center col-12 col-lg-6">
                <Mitsna clz="MitsnaImg1" imgClz="Img1"/>
              </div>
              <div className="HomeContactCard col-11 col-md-8 col-xl-5">
                <ContactCard/>
              </div>
            </div>
            </div>
          </header>
    );
}
export default ContactPage;