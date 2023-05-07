import { useState } from "react";
import sign from "../images/deals/firstOrder.webp";
import "../style/user.css";
import { useNavigate } from "react-router-dom";
export default function User(props) {
  const redirect = useNavigate();
  const [pin, setPin] = useState("");
  const handlePin = () => {
    if (pin === "123") {
      props.setLoggedIn(true);
      alert("Logged In");
      // <Navigate to="/" />
      redirect("/");
    } else {
      alert("Please Enter Correct Pin");
    }
  };
  // console.log(props.setLoggedIn)
  //  console.log(pin)
  return (
    <div className="userPage d-flex justify-content-center">
      <div className="loginPage shadow-sm mt-4 pb-5">
        <div className="formHead">
          <img src={sign} alt="..."></img>
        </div>
        <div className="baseForm">
          <span>
            <b>Login</b> or <b>Signup</b>
          </span>
          <input
            type={"number"}
            placeholder="Enter PIN*"
            className="form-control"
            onChange={(e) => setPin(e.target.value)}
          />
          <span className="termConditions">
            By continuing, I agree to the <b>Terms of use</b> &{" "}
            <b>Privacy Policy</b>
          </span>
          <button className="btn-myntra" onClick={handlePin}>
            CONTINUE
          </button>
          <span className="termConditions">
            Having Trouble Logging In? <b>Get Help</b>
          </span>
        </div>
      </div>
    </div>
  );
}
