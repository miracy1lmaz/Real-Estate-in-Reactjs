import { BrowserRouter, Route, Routes } from "react-router-dom";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Value from "./components/Value/Value";
import Residencies from "./components/Residencies/Residencies.jsx"
import Footer from "./components/footer/footer";



function App() {
  return (
<BrowserRouter>
    
    <div className="App">
        <Header />
        <Hero />
        <Companies />
        <Routes>
          <Route path="/residencies" element={<Residencies />}> </Route>
          <Route path="values" element={<Value/>}></Route>
        </Routes>
          <Contact />
          <GetStarted />
          <Footer />

      </div>
  </BrowserRouter>
  );
}

export default App;
