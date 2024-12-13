import '../App.css';
import React from 'react';
import Arrow from '../Component/arrow.js';
import MitsnaText from '../Component/MitsnaText.js';
import Bottom from '../Component/bottom-component.js';
import Box  from '../Component/box.js';
import Promote from '../Component/PromoteEdText.js'
import Navbar from '../Component/navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BecomeMember from '../Component/BecomeMember.js';
import HWH from '../Component/HowWeHelp.js';
import MitsnaEvents from '../Component/MitsnaEvents.js';
import Rebuild from '../Component/RebuildManipur.js';
import RM2 from '../Component/RebuildManipur2.js';
import Testimonial from '../Component/testimonial.js';
import AchivementBox from '../Component/achievementBox.js';
import Team from '../Component/Team.js';
import Volunteer from'../Component/BecomeVolunteer.js';
import Mitsna from'../Component/MitSna.js';
import ContactCard from '../Component/ContactCard.js';
function Home(){
    return(
      <div className="App">
       <header className="App-header">
        
        <Navbar/>

        <div className="box-1">
          <div className="grpPhoto">
            <MitsnaText/>
              
            <div className="box">
              <Box/>    
            </div>
          </div>
          </div>
          <Promote/>
          <div className="bot-container">
            <div className="d-flex flex-row justify-content-center Events">
                  <h1 className="EventH1">Ongoing/Upcoming Event Posts</h1>
                  <button className="MoreBtn">More</button>
            </div>
            <div className=" container-fluid">
            <div className="row parent-bot-container w-100">
              <div className="col-6 col-lg-3"><Bottom link="./MitsnaRecruit.jpeg" text="MITSNA'S BOOK DONATION CAMPAIGN"/></div>
              <div className="col-6 col-lg-3"><Bottom link="./MedicalCamp2.jpeg" text="RELIEF CAMP VISIT 10 – CHANDPUR, MOIRANG KHUNOU"/></div>
              <div className="col-6 col-lg-3"><Bottom link="./MedicalCamp.jpeg" text="RELIEF CAMP VISIT 9 – KANGHU CHINGJIN KHULLEN"/></div>
              <div className="col-6 col-lg-3"><Bottom link="./LetterNTA.jpeg" text="AN OPEN LETTER TO
              NATIONAL TESTING AGENCY (NTA)"/></div>
            </div> 
            </div>
            <Arrow/>

          </div>
          <div className="JoinPage container-fluid g-0">
            <div className="row">
              <div className="col-12 col-lg-6">
                <HWH/>
              </div>
              <div className="col-12 col-lg-6">
                <BecomeMember/>
              </div>
            </div>
          </div>
        
        <div className="text-center Event-container container">
          <h1 class="EventsHeading">MitSna Events</h1>
          <div className="row">
           <div className="col-12 col-md-6 col-xl-4"> <MitsnaEvents logo={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" className="mb-4 bi bi-mic" viewBox="0 0 16 16">
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
</svg>} head="MASSIVE OPEN TALK" para="Introduced in 2019, MOT invites eminent
            guests in and outside academia to speak on various subject matters"/></div>
            <div className="col-12 col-md-6 col-xl-4"><MitsnaEvents logo={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="mb-4 bi bi-magic" viewBox="0 0 16 16">
  <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z"/>
</svg>} head="Teach A Topic [TAT]" para="TAT is an online competition where
participants submit a 7-8 minutes educational video explaining any topic. It is the first of its kind in the state."></MitsnaEvents></div>
            <div className="col-12 col-md-6 col-xl-4"><MitsnaEvents logo={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="mb-4 bi bi-person-arms-up" viewBox="0 0 16 16">
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
  <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
</svg>} head="MitSna Interactive Talks [MIT]" para="It is a series of interactive talks held to impart knowledge of
various career counseling"></MitsnaEvents></div>
          
          <div className="col-12  col-md-6 col-xl-4">
            <MitsnaEvents logo={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="mb-4 bi bi-cup-hot" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175"/>
  <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"/>
</svg>} head="Share Your Experience" para="This event focuses on gathering the
experiences of other people in their academic or professional struggles.
Participants share a write-up or video explaining their experiences
and struggles."/></div>
           <div className="col-12 col-md-6 col-xl-4"> <MitsnaEvents logo={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" className="mb-4 bi bi-globe2" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
</svg>} head="Beyond The Door" para="A series of interviews for young achievers in different fields are
recorded and uploaded on our youtube channel."></MitsnaEvents>
      </div>
      <div className="col-12 col-md-6 col-xl-4"><MitsnaEvents logo={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="mb-4 bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>} head="Teach For Manipur [TFM]" para="With the goal of providing
            a free educational platform and study materials, TFM has already given access to
            Mathematics, Physics, Chemistry and Biology materials for class X on our youtube channel."></MitsnaEvents></div>
          </div>
        </div>
        <div className="RMbox1 container-fluid">
        <div class="row">
          <div className="order-lg-0 col-lg-6 col-12 p-0 order-md-0 col-md-7">
            <Rebuild/>
          </div>
          <div className="order-lg-3 d-none d-lg-inline p-0 col-lg-3">
            <img src="./Bag.jpeg" className="w-100 RMimg1"></img>
          </div>
        <div className="order-lg-1 d-none order-md-1 d-md-inline p-0 col-md-5 col-lg-3">
          <img src="./FreeHealthCamp.jpeg" className="w-100 RMimg2"></img>
        </div>
        <div className="RM-img-container d-md-none g-0 col-12">
          <img src="./FreeHealthCamp.jpeg" className=" w-100 RMimg4"></img>
        </div>
        <div className="order-lg-2 d-none order-md-2 d-md-inline p-0 col-md-5 col-lg-3">
          <img src="./Distribution.jpeg" className="w-100 RMimg3"></img>
        </div>
        <div className="order-lg-5 d-none order-md-3 d-md-inline p-0 col-md-7 col-lg-6">
          <RM2/>
        </div>
        <div className="order-lg-4 d-none d-lg-inline p-0 col-lg-3">
          <img src="./HandOver.jpeg" className="w-100 RMimg1"></img>
        </div>
        </div>
        </div>
        <div>
        <Testimonial/>
        </div>
        <Arrow/>
        <div className="AchContainer d-flex flex-col justify-content-center">
          <div className="achievement d-flex flex-row justify-content-center">
            <AchivementBox no="200" para="Received Donations From
            Our People"/>
            <AchivementBox no="99" para="Projects Done With
            The Help Of Donators"/>
            <AchivementBox no="200" para="People We Helped
            on 2020
            "/>
            <AchivementBox no="100" para="With Our Volunteers We’ve Solved Many Causes"/>        
          </div>
          <hr className="hrAch"></hr>
          <brand/>
          
        </div>
        <div className='TeamContainer text-center g-0 container-fluid'>
            <h2 className='TeamH2'>Team</h2>
            <h1 className='TeamH1'>Meet Our Directors</h1>
            
            <div className="row">
              <div className="col-12 col-md-6 col-xl-3"><Team link="./exmple.png" Name="Martin Luther"></Team></div>
              <div className="col-12 col-md-6 col-xl-3"><Team link="./exmple.png" Name="Martin Luther"></Team></div>
              <div className="col-12 col-md-6 col-xl-3"><Team link="./exmple.png" Name="Martin Luther"></Team></div>
              <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center"><Volunteer/></div>
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
    </div>
    );
}
export default Home;