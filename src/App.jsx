import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Catalog />} />
        <Route path="/kalkulator" element={<Calculator />} />
      </Route>
    </Routes>
  );
}

export default App;