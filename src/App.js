import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./folder/Home";
import Sucess from "./folder/Sucess";
import Error from "./folder/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
