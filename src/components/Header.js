import { Link } from 'react-router-dom';
import logo from '../images/myntra/myntra.png';

// import Checkout from './Checkout';
import '../style/header.css'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 mb-1 fixed-top bg-white">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to={"/"} className="navbar-brand" href="1">
                    <img src={logo} alt="logo" style={{ width: "38px " }} /></Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link nav-link-ltr" aria-current="page" href="1">MEN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-ltr" href="1">WOMEN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-ltr" href="1">KIDS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-ltr" href="1">HOME & LIVING</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-ltr" href="1">BEAUTY</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div className='userOptions ms-5'>
                        <Link to={"/user"}><i className="bi bi-person"></i></Link>
                        <Link to={"/checkout"}><i className="bi bi-heart"></i></Link>
                        <Link to={"/cart"}><i className="bi bi-bag"></i></Link>

                    </div>
                </div>
            </div>
        </nav>

    )
}
export default Header;