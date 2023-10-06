import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import './styles/App.scss';
import './styles/Header.scss';
import './styles/Home.scss';
import './styles/Footer.scss';
import './styles/Contact.scss';
import './styles/mediaqueries.scss';

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";


function App() {
  return (
    <Router>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contacts" element={<Contact></Contact>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
