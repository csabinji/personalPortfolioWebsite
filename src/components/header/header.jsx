import Hero from "./hero/hero";
import Navigation from "./navigation/navigation";

export default function Headder() {
    return (
        <div className="App">
            <Navigation/>
            <Hero/>
        </div>
    )
}