import "./styles/main.css";
import Nav from "./components/nav/NavBar";
import Footer from "./components/Footer/footer";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
function App() {
    return (
        <div className="App">
            <Nav />
            {/* <Home /> */}
            {/* <Projects /> */}
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
