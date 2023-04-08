import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import { useContext } from "react";
import { ThemeContext } from "./Components/utils/Theme.context";

function App() {
  const contextTheme = useContext(ThemeContext);
  console.log(contextTheme.theme);
  return (
      <div className={`App ${contextTheme.theme}`}>
          <Navbar/> 
          <Routes>
              <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="dentista/:id" element={<Detail/>}/>
                <Route path="contact/*" element={<Contact/>}/>
                <Route path="favs/*" element={<Favs/>}/>
                <Route path="*" element={<h1>404 Not Found</h1>}/>
              </Route>
          </Routes> 
          <Footer/>
    
      </div>
  );
}

export default App;
