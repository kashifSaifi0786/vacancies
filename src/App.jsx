import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Review from "./pages/Review";
import VacancyForm from "./pages/VacancyForm";

function App() {
  return (
    <Routes>
      <Route path="/form/:id" element={<VacancyForm />} />
      <Route path="/review/:id" element={<Review />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
