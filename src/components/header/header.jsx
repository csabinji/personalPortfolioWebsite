import Hero from "./hero/hero";
import Navigation from "./navigation/navigation";
import { useState } from "react";

export default function Headder() {
    const [showMenu, setMenuOpen] = useState(false)
    return (
        <div className="App">
            <Navigation showMenu={showMenu} setMenuOpen={setMenuOpen} />
            <Hero />
        </div>
    )
}