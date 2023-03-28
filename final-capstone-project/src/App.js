import './App.css';
import Nav from './components/Nav.js';
import HomePage from "./components/HomePage.js";

function App() {
  const isMobile = false;
  if (!isMobile) {
  return (
    <>
      <Nav/>
      <HomePage />
    </>
  );
  } else {
    return (
      <></>
    );
  };
};

export default App;
