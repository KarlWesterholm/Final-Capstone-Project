import './App.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Specials from "./components/Specials.js";
import Testimonials from "./components/Testimonials.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";

function App() {
  const greenBackground = {backgroundColor: "#495E57"}
  const isMobile = false;
  if (!isMobile) {
  return (
    <>
      <Nav/>
      <Header style={greenBackground}/>
      <Specials />
      <Testimonials style={greenBackground}/>
      <About />
      <Footer style={greenBackground}/>
    </>
  );
  } else {
    return (
      <></>
    );
  };
};

export default App;
