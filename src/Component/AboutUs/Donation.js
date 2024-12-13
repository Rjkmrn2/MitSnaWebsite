import '../../KnowUs/AboutUsPage/AboutUs.css';
export default function Donation(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 Donation">
                    <p className="Donation-para1">HOW DONATION CAN HELP</p>
                    <h1 className="Donation-h1">Donation</h1>
                    <h1 className="Donation-head1">Support Our Cause</h1>
                    <h1 className="Donation-head2">Be a part of MitSna.</h1>
                    <p className="Donation-para2">MitSna runs on the kindness and generosity of our patrons. We highly appreciate all the small and big contributions made towards MitSna' s funds. If you believe in the cause, help us in taking it forward by contributing to MitSna.</p>
                    <button className="Read-more-btn">Read more</button>
                </div>
                <div className="col-12 col-md-6">
                    <img src="/Bag.jpeg" className="About-img1"></img>
                </div>
            </div>
        </div>
    );
}