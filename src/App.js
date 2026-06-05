import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./component/Home/home";
 import { Complete } from "./component/Complete/complete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;