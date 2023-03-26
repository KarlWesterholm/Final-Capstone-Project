import './App.css';
import Nav from './Nav.js';
import Header from './Header.js';
import Specials from "./Specials.js";
import Testimonials from "./Testimonials.js";
import About from "./About.js";
import Footer from "./Footer.js";

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
