import { Link } from "react-router-dom";
import "../style/checkout.css";

export default function Checkout({ setLoggedIn }) {
  console.log(setLoggedIn);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="text-center pt-4 pb-4 w-25">
          <h5 className="fw-bold mb-4">Logged In as Admin</h5>
          <span className="fw-semibold text-secondary">
            Your Wishlist is Empty. Happy Shopping !!!
          </span>
          <div className="MyntraSpirit"></div>
          <div>
            {setLoggedIn ? (
              <button
                className="btn btn-outline-primary px-5 py-3 fw-bold rounded-0"
                onClick={() => setLoggedIn(false)}
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/signin"
                className="btn btn-primary px-5 py-3 fw-bold rounded-0"
              >
                Log In
              </Link>
            )}
            {/* <button className="btn btn-outline-primary px-5 py-3 fw-bold rounded-0">LOGIN</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
