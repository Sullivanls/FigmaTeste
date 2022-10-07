import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">AgendamentoOne</Link>
        </li>
        <li>
          <Link to="/agendamento">Agendamento</Link>
        </li>
        <li>
          <Link to="/agendamentotwo">AgendamentoTwo</Link>
        </li>
        <li>
          <Link to="/framethirteen">FrameThirteen</Link>
        </li>
        <li>
          <Link to="/framefourteen">FrameFourteen</Link>
        </li>
        <li>
          <Link to="/componentes">Componentes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;