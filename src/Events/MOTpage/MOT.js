import Navbar from '../../Component/navbar.js';
import './MOT.css';
import Arrow from '../../Component/arrow.js';
import TestBox from '../../Component/TestBox.js';
import Mitsna from'../../Component/MitSna.js';
import ContactCard from '../../Component/ContactCard.js';
import React from 'react';
import { NavLink } from "react-router-dom";

import Fb from '../../Component/Logo/fb.js';
import Insta from '../../Component/Logo/Insta.js';
import Linkin from '../../Component/Logo/Linkin.js';
import Twitter from '../../Component/Logo/Twitter.js';

function MOT(){
    return(
        <>
            <Navbar/>
            <div className="MOT-page text-center">
                <img src="/GROUP_photo_bot.jpg" className="Group-img"></img>
                <h1 className="MOT-head1 m-3">MASSIVE OPEN TALK: 2022 <br/>
                13th November, GM Hall,9:30am</h1>
                <p className="Meet-para">Meet our Speakers of MOT 2022</p>
                <h1 className="employ-head2">"Employing the Youth: Transforming for a Sustainable Future."</h1>
                <div className="Container">
                    <div className="test-box row">
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <TestBox link="./exmple.png" head="Belli Smith" pro="Designer" para="Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content."/>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <TestBox link="./exmple.png" head="Sara Taylor" pro="Donator" para="Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content."/>
                        </div>
                    </div>
                    <Arrow/>
                    <button style={{borderRadius:"30px", width:"220px"}} className="btn btn-danger mb-5">MOT 2022 Videos Playlist</button>
                </div>
            </div>
            <div>
                {/* Top Section */}
                <div style={{ backgroundColor: "black", color: "white", textAlign: "center", padding: "20px" }}>
                    <h2 className="key-head3">One of the key feature of MitSna is to prepare our youth for the challenges in the future by empowering them.</h2>
                    <p className="MOTpara1">
                    Massive Open Talk is envisioned as MitSna’s MOT with the vision to increase our youth’s employability. It creates a generation of employers and young entrepreneurs and, over and above, instills a sense of commitment to society and logical and critical thinking.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0" }}>
                    <img className="MOT-img1 mr-3" src="/FreeHealthCamp.jpeg"></img>
                    <img className="MOT-img1 mr-3" src="/FreeHealthCamp.jpeg"></img>
                    <img className="MOT-img1" src="/FreeHealthCamp.jpeg"></img>
                    </div>
                </div>

                {/* Sponsor Section */}
                <div style={{ backgroundColor: "#39a78e", color: "white", padding: "20px", textAlign: "center" }}>
                    <h3>Sponsor Our Upcoming Events</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <NavLink className="nav-link" to="/contact-page">
                        <button style={{ backgroundColor: "#ff4081", color: "white", border: "none", padding: "10px 20px", cursor: "pointer" ,borderRadius: "30px" ,width: "130px"}}>Contact Us</button>
                    </NavLink>
                </div>

                {/* Speakers Section */}
                <div style={{ padding: "40px", textAlign: "center" }}>
                    <h2 className="Meet-para">Meet our Speakers of MOT 2019</h2>
                    <h3>“STREAMLINING EDUCATION FOR THE YOUTH”</h3>
                    <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "20px" }}>
                    {Array(3).fill(null).map((_, index) => (
                        <div key={index} style={{ textAlign: "center" }}>
                        <div style={{ width: "100px", height: "100px", backgroundColor: "#ccc", borderRadius: "50%", margin: "auto" }}>
                            <img className="w-100 MOT-profile" src="/office.jpeg"></img>
                        </div>
                        <h4>Sahil Das Gupta</h4>
                        <p>Product Designer</p>
                        <p>Product design as a verb is to create a new product to be sold by a business to its customers.</p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                            <div style={{ width: "20px", height: "20px"}}>
                                <Fb className="w-100"/>
                            </div>
                            <div style={{ width: "20px", height: "20px"}}>
                                <Insta className="w-100"/>
                            </div>
                            <div style={{ width: "20px", height: "20px"}}>
                                <Linkin className="w-100"/>
                            </div>
                            <div style={{ width: "20px", height: "20px"}}>
                                <Twitter className="w-100"/>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="text-center">
                {/* Playlist Button */}
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <button style={{marginBottom:"30px", backgroundColor: "#CA0B00", color: "white", border: "none", padding: "10px 20px", cursor: "pointer", borderRadius: "30px" ,width: "250px" }}>MOT 2022 Videos Playlist</button>
                </div>
                </div>
                <div className="MOT-bottom">
                {/* Header Section */}
                <div className="MOT-box">
                <div style={{ textAlign: "center", padding: "20px" }}>
                    <h1>Glimpse of MOT 2019</h1>
                </div>

                {/* Highlights Section */}
                <div style={{ display: "flex", justifyContent: "space-around", margin: "20px 0" }}>
                    <div style={{ width: "350px", height: "300px", backgroundColor: "#ccc" }}>
                        <img src="/MitsnaRecruit.jpeg" className="w-100 h-100 GlimpseMOT"></img>
                    </div>
                    <div style={{ width: "350px", height: "300px", backgroundColor: "#ccc" }}>
                        <img src="/Distribution.jpeg" className="GlimpseMOT h-100 w-100"></img>
                    </div>
                    <div style={{ width: "350px", height: "300px", backgroundColor: "#ccc" }}>
                        <img src="/MedicalCamp.jpeg" className="GlimpseMOT h-100 w-100"></img>
                    </div>
                </div>

                {/* Description Section */}
                <div style={{ padding: "20px", lineHeight: "1.6" }}>
                    <p className="MOT-para2">
                    It cannot be denied that our youth in schools and colleges are following an outdated form of education that does not address the individuals' potential and capabilities. Education has become more of a low-nutrient diet without the essential requirements, with everyone accessing the same things regardless of their needs. The system's lack of target and vision has created a mass of unemployed youths who do not have special skills for any specific job. Amidst this scenario, Manipur has seen a few people who stood out from the crowd, one being Oja Dhanabir. He rightly said in his talks that the future belongs to the youth.
                    </p>
                </div>
                </div>
                {/* Issues Section */}
                <div style={{ padding: "20px" }}>
                    <div className="text-center m-3">
                        <h3>With MOT, we intended to bring to light the following issues: -</h3>
                    </div>
                    <ul className="fw-bold MOT-list">
                    <li>The education system in our state has become relatively rigid and outdated. Our teaching-learning processes should be flexible enough to adapt to the changing pace of technology. As the internet continues to evolve, we need educators (efficient ones) on the platform.</li>
                    <li>There is a need to de-stigmatize non-academic Education and reinstate vocational training, art, music, and drama.</li>
                    <li>We must address the issue of 'Education for the sake of Education.' Several students are being forced into Medical and Engineering schools because there is an apparent perception in our state that they are the threshold for higher Education. The linearity with which we approach higher studies has made the process tedious. We need to expand our horizons and branch out to other domains of learning. For example, there is the old-age perception that Humanities and Arts streams are for the students who are not smart enough for Medical and Engineering students. We need to break this stereotype.</li>
                    <li>The situation in Manipur is regrettable as Education isn’t failing for the rich because they have access to prestigious and fancy schools abroad. The poor are stuck, and it is high time to change our focus from literacy to Education.</li>
                    <li>Manipuris have a reflexive tendency to accept an institution based on the name alone, which has compromised the quality of teaching and learning. The current education system is more focused on producing people who are only trained to crack exams leading to only a few professional streams. Institutionalization has affected secondary schools to a great extent.</li>
                    <li>Putting an economic spin on Education has turned Education into a commodity. Even then, we are not doing it like the other states. We are not focused on business studies or commerce. We are only focused on preparing the kids for these standardized tests.</li>
                    <li>We also need to address the elephant in the room. The entire system is lacking because of the subpar level of higher Education. In the University, things like creativity and judgment are undervalued because classes that reinforce such values are being sidelined. It eventually turns into a rat race of students concerned only with jumping through hoops to make the professors happy.</li>
                    <li>With these issues in mind, we, as a group, would like to bring awareness to the students in particular and the larger public in general.</li>
                    </ul>
                </div>
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
        </>
    );
}
export default MOT;