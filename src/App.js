
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './ContactPage/contact-page'
import JoinUs from './JoinUSPage/JoinUs.js';
import MIT from './Events/MITpage/MIT';
import Team from './KnowUs/TeamPage/Team.js';
import Members from './KnowUs/MembersPage/Members.js';
import BoardMembers from './KnowUs/BoardMembersPage/BoardMembers.js';
import MembersAchievement from './KnowUs/MembersAchievementPage/MembersAchievements';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Intern from './KnowUs/InternPage/Intern.js';
import SupportUs from './KnowUs/SupportUsPage/SupportUs.js';
import MOT from './Events/MOTpage/MOT.js';
import Home from './HomePage/Home.js';
import AboutUs from './KnowUs/AboutUsPage/AboutUs.js';
import BTD from './Events/BTDpage/BTD';
import SYE from './Events/SYEpage/SYE';
import TAT from './Events/TATpage/TAT';
import TFM from './Events/TFMpage/TFM';
import Book from './Subsidiaries/BookCorner/Book';
import MitsnaFC from './Subsidiaries/MitsnaFCpage/MitsnaFC.js';
import Movie from './Subsidiaries/MovieCorner/Movie';
import Science from './Subsidiaries/ScienceCorner/Science';
import BTS from './RebuildManipur/BTSpage/BTS';
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact-page" element={<ContactPage/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/JoinUs" element={<JoinUs/>}/>
      <Route path="/TeamPage/Team" element={<Team/>}/>
      <Route path="/MembersPage/Members" element={<Members/>}/>
      <Route path="/BoardMembersPage/BoardMembers" element={<BoardMembers/>}/>
      <Route path="/MembersAchievementPage/MembersAchievements" element={<MembersAchievement/>}/>
      <Route path="/InternPage/Intern" element={<Intern/>}/>
      <Route path="/SupportUsPage/SupportUs" element={<SupportUs/>}/>
      <Route path="/MOTpage/MOT" element={<MOT/>}/>
      <Route path="/MITpage/MIT" element={<MIT/>}/>
      <Route path="/BTDpage/BTD" element={<BTD/>}/>
      <Route path="/SYEpage/SYE" element={<SYE/>}/>
      <Route path="/TATpage/TAT" element={<TAT/>}/>
      <Route path="/TFMpage/TFM" element={<TFM/>}/>
      <Route path="/BookCorner/Book" element={<Book/>}/>
      <Route path="/MitsnaFCpage/MitsnaFC" element={<MitsnaFC/>}/>
      <Route path="/MovieCorner/Movie" element={<Movie/>}/>
      <Route path="/ScienceCorner/Science" element={<Science/>}/>
      <Route path="/BTSpage/BTS" element={<BTS/>}/>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
