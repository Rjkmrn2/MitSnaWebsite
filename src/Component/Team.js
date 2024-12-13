import Logo from './LogoComp.js'
function Team(props){
    return(<div className="TeamBox">
        <img src={props.link} className="TeamImg"></img>
        <h1 className="TeamName">{props.Name}</h1>
        <Logo/>
    </div>);
}
export default Team;
