import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/NavBar";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrolToTop";
function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
