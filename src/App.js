import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import './styles/App.scss';
import './styles/Header.scss';
import './styles/Home.scss';
import Home from "./components/Home/Home";


function App() {
  return (
    <Router>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
