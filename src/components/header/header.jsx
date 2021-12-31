import Hero from "./hero/hero";
import Navigation from "./navigation/navigation";
import { useState } from "react";

export default function Headder() {
    const [showMenu, setMenuOpen, scroll, setScroll] = useState(false)
    return (
        <div className="App">
            <Navigation showMenu={showMenu} setMenuOpen={setMenuOpen} scroll={scroll} setScroll={setScroll} />
            <Hero />
        </div>
    )
}