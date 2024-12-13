import Navbar from '../../Component/navbar.js';
import './Team.css';
import MemberCard from '../../Component/Team/Member-card.js';
import ContactCard from '../../Component/ContactCard.js';
import Mitsna from '../../Component/MitSna.js';
export default function Team(){
    return(
        <div className="Team text-center container-fluid">
            <Navbar/>
            <h1 className="Team-head">Our Team</h1>
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <MemberCard name="Sahil Rajkumar" role="Product-Designer" description="Product design as a verb is to create a new product to be sold by a business to its customers."></MemberCard>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <MemberCard name="Sahil Rajkumar" role="Product-Designer" description="Product design as a verb is to create a new product to be sold by a business to its customers."></MemberCard>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <MemberCard name="Sahil Rajkumar" role="Product-Designer" description="Product design as a verb is to create a new product to be sold by a business to its customers."></MemberCard>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <MemberCard name="Sahil Rajkumar" role="Product-Designer" description="Product design as a verb is to create a new product to be sold by a business to its customers."></MemberCard>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <MemberCard name="Sahil Rajkumar" role="Product-Designer" description="Product design as a verb is to create a new product to be sold by a business to its customers."></MemberCard>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <MemberCard name="Sahil Rajkumar" role="Product-Designer" description="Product design as a verb is to create a new product to be sold by a business to its customers."></MemberCard>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <MemberCard name="Sahil Rajkumar" role="Product-Designer" description="Product design as a verb is to create a new product to be sold by a business to its customers."></MemberCard>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <MemberCard name="Sahil Rajkumar" role="Product-Designer" description="Product design as a verb is to create a new product to be sold by a business to its customers."></MemberCard>
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
        </div>
    );
}