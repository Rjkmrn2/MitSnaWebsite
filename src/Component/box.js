import { NavLink } from "react-router-dom";
function Box(props){
    return(
        <div className="flexx">
            <div className="box-2 box--1">
                <h1 className="box-h1 ml-3 text-light mt-1">Education</h1>
                <button className="btnBox-1">Discover</button>
            </div>
            <div className="box-2 box--2 p-3">
                <h1 className="box-h2 ml-3 text-light mt-2">Become<br/>a Volunteer</h1>
                {/* font-family */}
                <NavLink to="/JoinUs" className="Anchor">Join Mitsna</NavLink>
            </div>
        </div>
    );
}
export default Box;