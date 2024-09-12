import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Detail from './Pages/Detail';
import Favs from './Pages/Favs';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
          
  );
}

export default App;
