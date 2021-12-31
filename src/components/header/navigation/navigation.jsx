import "./navigation.css"
import { FiMenu } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';
import { useEffect, useState } from "react";

export default function Navigation({ showMenu, setMenuOpen }) {
    const [header, setHeader] = useState(false)

    const listenScrollEvent = () => {
        if (window.scrollY > 100) {
            return setHeader(true)
        } else {
            return setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <header id="header" className={`fixed-top d-flex justify-content-center align-items-center header-transparent ${header ? "header-scrolled" : ""}`}>
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