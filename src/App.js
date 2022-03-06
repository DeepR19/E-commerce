import Home from "./container/Home/Home";
import Error from "./container/404/Error";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

const title= "E-Commerce | DeepR19"

function App() {
  document.title = title;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
