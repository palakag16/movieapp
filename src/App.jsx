import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from "./pages/details/Details";
const App = () => {
  return (
    <div className="App">
      <Router>
      <Routes>
       <Route  exact path="/" element={<Home/>}></Route>
       <Route  exact path="/:id" element={<Details/>}></Route>
      </Routes>
      </Router>
    </div>
  );
};

export default App;