import React from "react";
import Componentes from "pages/Componentes";
import FrameFourteen from "pages/FrameFourteen";
import FrameThirteen from "pages/FrameThirteen";
import AgendamentoTwo from "pages/AgendamentoTwo";
import Agendamento from "pages/Agendamento";
import AgendamentoOne from "pages/AgendamentoOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgendamentoOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/agendamentotwo" element={<AgendamentoTwo />} />
        <Route path="/framethirteen" element={<FrameThirteen />} />
        <Route path="/framefourteen" element={<FrameFourteen />} />
        <Route path="/componentes" element={<Componentes />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
