import { Link } from "react-router-dom";
import logo from "../images/myntra/myntra.png";
import HoverMenu from "./HoverMenu";

// import Checkout from './Checkout';
import "../style/header.css";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 mb-1 fixed-top bg-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to={"/"} className="navbar-brand" href="1">
          <img src={logo} alt="logo" style={{ width: "38px " }} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link nav-link-ltr "
                data-bs-toggle="dropdown"
                aria-current="page"
                href="hover"
              >
                MEN
              </a>
              <div className="dropdown-menu rounded-0 pt-0 w-100">
                <HoverMenu />
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link-ltr"
                data-bs-toggle="dropdown"
                href="1"
              >
                WOMEN
              </a>
              <div className="dropdown-menu rounded-0 pt-0 w-100">
                <HoverMenu color="text-warning" />
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link-ltr"
                data-bs-toggle="dropdown"
                href="1"
              >
                KIDS
              </a>
              <div className="dropdown-menu rounded-0 pt-0 w-100">
                <HoverMenu color={"text-success"} />
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link-ltr"
                data-bs-toggle="dropdown"
                href="1"
              >
                HOME & LIVING
              </a>
              <div className="dropdown-menu rounded-0 pt-0 w-100">
                <HoverMenu color={"text-info"} />
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link-ltr"
                data-bs-toggle="dropdown"
                href="1"
              >
                BEAUTY
              </a>
              <div className="dropdown-menu rounded-0 pt-0 w-100">
                <HoverMenu color={"text-primary"} />
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="userOptions ms-5">
            <Link to={"/signin"}>
              <i className="bi bi-person"></i>
            </Link>
            <Link to={"/checkout"}>
              <i className="bi bi-heart"></i>
            </Link>
            <Link to={"/cart"}>
              <i className="bi bi-bag"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
