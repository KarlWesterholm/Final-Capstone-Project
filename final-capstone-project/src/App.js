import './App.css';
import {VStack} from "@chakra-ui/react";
import Nav from './components/Nav.js';
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";


function App() {
  // Boolean to determine if the display size needs to be Mobile (in progress)
  const isMobile = false;
  if (!isMobile) {
  return (
  <>
    <Nav/>
    <VStack minHeight={"100vh"} justifyContent={"space-between"}>
      <Main />
      <Footer/>
    </VStack>
  </>
  );
  } else {
    return (
      <></>
    );
  };
};

export default App;
