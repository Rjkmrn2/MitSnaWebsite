import '../../KnowUs/TeamPage/Team.css';
import Fb from '../../Component/Logo/fb.js';
import Insta from '../../Component/Logo/Insta.js';
import Linkin from '../../Component/Logo/Linkin.js';
import Twitter from '../../Component/Logo/Twitter.js';
export default function MemberCard(props){
    return(
        <div className="bg-white card">
            <img src="/office.jpeg" className="member-photo"></img>
            <h1 class="name">{props.name}</h1>
            <p className="role">{props.role}</p>
            <p className="desc">{props.description}</p>
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
    );
}