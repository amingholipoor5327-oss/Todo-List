import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./component/Home/home";
import {Delete} from "./component/Delete/delete"
import { Complete } from "./component/Complete/complete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;