import './App.css';
import Nav from './components/Nav.js';
import Main from "./components/Main.js"

function App() {
  const isMobile = false;
  if (!isMobile) {
  return (
    <>
      <Nav/>
      <Main />
    </>
  );
  } else {
    return (
      <></>
    );
  };
};

export default App;
