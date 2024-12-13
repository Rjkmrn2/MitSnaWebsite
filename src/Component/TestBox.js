function TestBox(props){
    return(
        <div className="TestBox d-flex flex-row">
            <img src={props.link} className="TestImg"></img>
            <div>
                <h1 className="TestBoxH1">{props.head}</h1>
                <p className="Profession">{props.pro}</p>
                <p className="TestPara">{props.para}</p>
            </div>
        </div>
    );
}
export default TestBox;