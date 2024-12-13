function HomeSignUp(){
    return(
        <div className="BMbox">
            <div class="BMinnerBox HomeBox">
                
                <input className="inputHome" placeholder="Enter Your Name*" type="text"/><br/>
                <input className="inputHome" placeholder="Phone Number*" type="text"/><br/>
                <input className="inputHome" placeholder="Email Address*" type="text"/><br/>
                <textarea className="CommentHome" placeholder="Your Message*"></textarea><br/>
                <button className="submitBtnHome">Submit</button>
            </div>
        </div>
    )
}
export default HomeSignUp;
