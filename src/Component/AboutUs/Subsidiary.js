import '../../KnowUs/AboutUsPage/AboutUs.css';
export default function Subsidiary(props){
    return(
        <div className="SubsContainer w-100 text-center">
            
                <img src={props.link} className="w-100 subs-img"></img>
                <h1 className="SubsHead">{props.head}</h1>
                <p className="subs-text">{props.text}</p>
                <p className="readmore">Read more</p>
        </div>
    );
}