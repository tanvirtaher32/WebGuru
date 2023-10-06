import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import './styles/App.scss';
import './styles/Header.scss';
import './styles/Home.scss';
import './styles/Footer.scss';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}>

        </Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
