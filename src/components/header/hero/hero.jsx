import './hero.css'
import { AiOutlineDown } from 'react-icons/ai'

export default function Hero() {
    return (
        <section id="hero">
            <div class="hero-container">
                <h1>Sabin Chapagain</h1>
                <h2>I'm Rapper and Beat producer from Kathmandu, Nepal.</h2>
                <a href="#about" class="btn-scroll scrollto" title="Scroll Down">
                    <i><AiOutlineDown /></i>
                </a>
            </div>
        </section>
    )
}