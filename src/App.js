import "./App.css";
import VendingMachine from "./VendingMachine";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CocaCola from "./CocaCola";
import Pepsi from "./Pepsi";
import Chips from "./Chips";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/coca-cola" element={<CocaCola />} />
          <Route path="/pepsi" element={<Pepsi />} />
          <Route path="/chips" element={<Chips />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
