function Bottom(props){
    return(
        <div className="BotContainer w-100">
            
                <img src={props.link} className="w-100 bot-img"></img>
                <p className="bot-text">{props.text}</p>
        </div>
    );
}
export default Bottom;