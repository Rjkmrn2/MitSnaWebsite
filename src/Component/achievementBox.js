function AchivementBox(props){
    return(
        <div className="AchBox">
            <h1 className="AchH1">{props.no}</h1>
            <p className="AchPara">{props.para}</p>
        </div>
    );
}
export default AchivementBox;