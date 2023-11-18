import {useState} from "react"
import ListIcon from "./images/icon-list.svg"
import deskView from "./images/illustration-sign-up-desktop.svg"
import successView from "./images/icon-success.svg"
import mobileView from "./images/illustration-sign-up-mobile.svg"
import './App.css';

const App = () => {
  const [email, setEmail] = useState()
  const [isShow, setShow] = useState(true)
  const[thanksCard,setCard]=useState(false)
  function validateEmail(eamil) {
    const pattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(eamil)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const onSubtitBtn = (e) => {
    e.preventDefault();
    const result = validateEmail(email)
    setEmail(undefined)
    setShow(result)
    setCard(result)
  }
  const dismisButn = () => {
    setCard(false)
  }
  
  return (
    <div className="App">
      {thanksCard?<div className="card-sv">
         <img src={successView} alt="right"/>
        <h1 className="head-sv">Thanks for subscribing!</h1>
        <p className="paratxt2">A conformation email has been sent to {email}. please open it and click the button inside to confirm your subscription.</p>
        <button type="button" className="dissbtn" onClick={dismisButn}>Dismiss message</button>
      </div> : <div className="main-cont">
           <img src={mobileView} alt="mb-view" className="mobile-view"/>
          <div className="first-cont">
           
          <h1 className="head">Stay updated!</h1>
          <p className="ptxt1">Join 60,000+ product managers recieving monthly updates on:</p>
          <p className="list-items"><img src={ListIcon} alt="icon"/><span>Product discovery and building what matters</span></p>
          <p className="list-items"><img src={ListIcon} alt="icon"/><span>Measuring to ensure updates are a success</span></p>
          <p className="list-items"><img src={ListIcon} alt="icon"/><span>And much more!</span></p>
          <form className="form-field" onSubmit={onSubtitBtn}>
            <div className="err-lab-p">
              <label htmlFor="email" className="elbl">Email address</label>
              <p>{ isShow?null :<span className="errcls">Valid email required</span>}</p>
            </div>
            <input type="eamil" id="eamil" placeholder="email@company.com" className={isShow?"email-input":"email-error"} onChange={ handleEmail} />
            <button type="submit" className="submit-btn">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div>
          <img src={deskView} alt="dst-pic" className="diskpic"/>
        </div>
      </div>}
     
      
    </div>
  );
}

export default App;
