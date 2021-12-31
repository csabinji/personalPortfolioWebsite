import "./navigation.css"
import { FiMenu } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';

export default function Navigation({ showMenu, setMenuOpen }) {
    return (
        <header id="header" class="fixed-top d-flex justify-content-center align-items-center header-transparent">

            <nav id="navbar" className={showMenu ? "navbar navbar-mobile" : "navbar"}>
                <ul>
                    <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a class="nav-link scrollto" href="#about">About</a></li>
                    <li><a class="nav-link scrollto " href="#portfolio">Projects</a></li>
                    <li><a class="nav-link scrollto" href="#services">Services</a></li>
                    <li><a class="nav-link scrollto" href="http://csabin.com.np/" rel="noreferrer" target="_blank">Blog</a></li>
                    <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i class="mobile-nav-toggle" onClick={() => setMenuOpen(!showMenu)}>{showMenu ? <MdCancel /> : <FiMenu />}</i>
            </nav>
        </header>

    )
}