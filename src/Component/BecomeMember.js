function BecomeMember(){
    return(
        <div className="BMbox">
            <div className="BMinnerBox row">
                <h1 className="BMtext">Become a Member</h1>
                <div className="col-10"><input className="input" placeholder="Full Name*" type="text"/></div><br/>
                <div className="col-10"><input className="input" placeholder="Email Adress*" type="text"/></div><br/>
                <div className="col-10"><input className="input" placeholder="Phone Number*" type="text"/></div><br/>
                <div className="col-10"><textarea className="Comment" placeholder="Message*"></textarea></div><br/>
                <div className="col-10"><button className="submitBtn">Submit Now</button></div>
            </div>
        </div>
    )
}
export default BecomeMember;