import styled from "styled-components";
import About from "./components/about";
import Contact from "./components/contact";
import Work from "./components/work";
import Home from "./pages/home";
import Header from "./static/header";
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Dive>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/about" element={<About/>}/>         
          <Route path="/work" element={<Work/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Home/>
        <About/>
        <Contact/>
        {/* <Work/> */}
      </BrowserRouter>
    
    </Dive>
  );
};

export default App;
const Dive = styled.div`
  font-size: poppins;
`