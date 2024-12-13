function Arrow(){
    let n="<";
    let m=">";
    return(
    <div class="d-flex flex-row justify-content-center">
        <button className="arrow mr-4">{n}</button>
        <button className="arrow">{m}</button>
    </div>
    );
}
export default Arrow;