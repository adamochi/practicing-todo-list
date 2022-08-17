import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
