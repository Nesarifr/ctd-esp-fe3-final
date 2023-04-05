
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";


function App() {
  return (
      <div className="App">
          <Navbar/> 
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/dentist/" element={<Detail/>}/>
              <Route path="/contact/*" element={<Contact/>}/>
              <Route path="/favs/*" element={<Favs/>}/>
              <Route path="*" element={<h1>404 Not Found</h1>}/>
          </Routes>

          
          <Footer/>
      </div>
  );
}

export default App;
