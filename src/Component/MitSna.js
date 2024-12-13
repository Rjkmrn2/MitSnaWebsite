
import ContactLogo from './contactLogo';
function Mitsna(props){
    return(
    
        <div className="MitsnaBox">
            <div className={props.clz}>
                <img src="/MitsnaDrawLOGO2.png" className={props.imgClz}></img>
            </div>
            <p className="Mitsnapara">A non-profit organization that is working extensively to promote quality education in Manipur at global standards.</p>
            <div className="contactLogo"><ContactLogo/></div>
        </div>
        );
}
export default Mitsna;
