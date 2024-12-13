import Navbar from '../Component/navbar.js';
import './JoinUs.css';
import '../App.css';
import ContactCard from '../Component/ContactCard.js';
import Mitsna from '../Component/MitSna.js';



  

function JoinUs(){
  
    return(
        <>
        <Navbar></Navbar>
        <div className="text-center d-flex flex-column justify-content-center JoinTeam">
            <h1 className="JoinHead">JOIN OUR TEAM</h1>
            <p className='JoinUsPara text-center'>Join us and become a part of the largest network<br></br>
                of Manipuri students and working<br/>
                professionals across the globe.
            </p>
            <div>
                <button className="btn btn-primary ApplyToday-btn">Apply Today</button>
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
export default JoinUs;