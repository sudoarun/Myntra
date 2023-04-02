import sign from '../images/deals/firstOrder.webp'
import '../style/user.css'
export default function User() {
    return (
        <div className='userPage d-flex justify-content-center'>
            <div className="loginPage shadow-sm mt-4 pb-5">
                <div className='formHead'>
                    <img src={sign} alt='...'></img>
                </div>
                <div className='baseForm'>
                    <span><b>Login</b> or <b>Signup</b></span>
                    <input type={'number'} placeholder="Mobile Number*" className='form-control' />
                    <span className='termConditions'>By continuing, I agree to the <b>Terms of use</b> & <b>Privacy Policy</b></span>
                    <button>CONTINUE</button>
                    <span className='termConditions'>Having Trouble Logging In? <b>Get Help</b></span>
                </div>
            </div>
        </div>
    )
}