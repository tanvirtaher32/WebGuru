import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import './styles/App.scss';
import './styles/Header.scss';


function App() {
  return (
    <Router>
      <Header></Header>

      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
