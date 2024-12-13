function MitsnaEvents(props){
  return(<div className="EventBox text-center justify-content-center">
    <div className="text-center">
      {props.logo}
    </div>
    <h1 className="EventH1">{props.head}</h1>
    <p className="EventPara">{props.para}</p>
  </div>);
} 
export default MitsnaEvents;