import TestBox from './TestBox.js';
function Testimonial(){
    return(<div className="Testimonial container">
        <h2 className="TestH2">Testimonial</h2>
        <h1 className="TestH1">What people say about us</h1>
        <div className="TestBoxes row">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <TestBox link="./exmple.png" head="Belli Smith" pro="Designer" para="Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content."/>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <TestBox link="./exmple.png" head="Sara Taylor" pro="Donator" para="Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content."/>
          </div>
        </div>
    </div>);
}
export default Testimonial;