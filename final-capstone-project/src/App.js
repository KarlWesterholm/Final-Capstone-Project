import './App.css';
import Nav from './components/Nav.js';
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";


function App() {
  // Boolean to determine if the display size needs to be Mobile (in progress)
  const isMobile = false;
  if (!isMobile) {
  return (
    <div id="app">
      <Nav/>
      <Main />
      <Footer/>
    </div>
  );
  } else {
    return (
      <></>
    );
  };
};

export default App;
