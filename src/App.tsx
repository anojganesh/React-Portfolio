import Button from "./components/Button"
import Navbar2 from "./components/Navbar2"
import Home from "./components/Home"
import Footer from "./components/Footer"
import "./App.css";
function App() {

  const handleClickButton = () => {
    console.log("clicked");
  }
  const handleSelectItem = () => {
    console.log("v")
  }
  return (
    <>
    <Navbar2 items={["Home","Projects","Experience"]} onSelectItem = {handleSelectItem} navbarTheme = "navbar-dark bg-dark"/>
    <Home />
    <Footer />
    </>
  );
}

export default App;