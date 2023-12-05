import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <Navbar />
                <Home />
                <About />
                <Skills />
                <Work />
            </div>
        </>
    );
}

export default App;
