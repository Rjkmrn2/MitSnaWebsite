import Navbar from '../../Component/navbar.js';
import './AboutUs.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Subsidiary from '../../Component/AboutUs/Subsidiary.js';
import Donation from '../../Component/AboutUs/Donation.js';
import ContactCard from '../../Component/ContactCard.js';
import Mitsna from '../../Component/MitSna.js';
function AboutUs(){
    const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/JoinUs'); // Navigate to the Event component
  };
    return(
        <>
        <Navbar></Navbar>
        <div className="container-fluid background">
            <div className="row">
                <div className="d-lg-inline col-lg-6 d-none">
                    <img src="/Bag.jpeg" className="About-img"></img>
                </div>
                <div className="col-12 col-lg-6">
                    <h1 className="About-h1">MitSna Foundation</h1>
                    <p className="About-para1">MitSna is a non-profit  section 8 company that is working extensively to promote quality education in Manipur at global standards. As of 2024,eightyeight (88) dedicated members from diverse backgrounds, including Sciences, Humanities, Medicine, Engineering and Commerce, are putting effort into achieving our goal.</p>
                    <button className="JoinUs-btn" onClick={handleNavigate}>Join Us</button>
                    <button className="Donate-btn">Donate</button>
                    <hr className="About-hr"></hr>
                    <p className="About-para2">Have any questions?<br/>
                    Contact us!</p>
                    <h1 className="Number">+996(4343)4325665</h1>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <div className="AboutUs-section container">
                    <div className="row">
                        <div className="col-12 col-md-7">
                            <p className="AboutUs-para">Who we are</p>
                            <h1 className="AboutUs-h1">About Us</h1>
                            <p className="AboutUs-para2">MitSna is a youth driven non-profit group working towards the goal of providing quality and equitable educational resources and other facilities for a better Manipur. Our name and logo which stands for the summation /integration (S) of 'mit' (eye) and 'na' (ear) gives an overview of our vision and goal of being the eyes and ears of the younger generations. We are a group of like-minded young people comprising of graduates and undergraduates with diverse backgrounds from different institutes across the country and abroad with wide global exposure aiming towards the promotion of free and holistic education to the youths of Manipur.</p>
                            <button className="ReadMore-btn">Read More</button>
                        </div>
                        <div className="d-none d-md-inline col-md-5 text-center">
                            <img src="/MitsnaDrawLOGO2.png" className="mits-logo"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="green-bg">
            .
        </div>
        <div className="OurSubsidiaries text-center">
            <h1 className="OurSubs">Our Subsidiaries</h1>
            <p className="intern">intern</p>
        
        {/* subsidiaries */}
            <div className="container-fluid">
                <div className="row w-100">
                <div className="col-6 col-lg-3"><Subsidiary className="subs" head="Science Corner" link="./MitsnaRecruit.jpeg" text="Movie Corner aims to learn from movies, inculcate the ability to critically analyze and absorb the ideas behind movies and publish them as reviews.............."/></div>
                <div className="col-6 col-lg-3"><Subsidiary className="subs" head="Movie Corner" link="./MedicalCamp2.jpeg" text="Science corner is a team of two undergrads venturing into science communication and popularization under the mentorship of a grad student......."/></div>
                <div className="col-6 col-lg-3"><Subsidiary className="subs" head="Book Corner" link="./MedicalCamp.jpeg" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."/></div>
                <div className="col-6 col-lg-3"><Subsidiary className="subs" head="Football Club" link="./LetterNTA.jpeg" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."/></div>
                </div> 
            </div>
            <div className="">
                <Donation></Donation>
            </div>
        </div>
        <div className="text-center FAQ">
            <h1 className="FAQ-head">FAQ</h1>
            <p className="FAQ-para">Frequently asked questions about MitSna</p>
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
    </>
    );
}
export default AboutUs;