import Button from "./components/Button";
import Navbar2 from "./components/Navbar2";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  const handleClickButton = () => {
    console.log("clicked");
  };
  const handleSelectItem = () => {
    console.log("v");
  };
  return (
    <div className="App">
      <Navbar2
        items={["Projects", "Experience"]}
        onSelectItem={handleSelectItem}
        navbarTheme="navbar-dark bg-dark"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
