import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link to="/">
        <div className="navbar-brand">
          <i className="fa fa-calendar-check-o"></i>
          TodoApp
        </div>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link to="/todos">
            <li className="nav-item">
              <div className="nav-link text-light">Tarefas</div>
            </li>
          </Link>
          <Link to="/about">
            <li className="nav-item">
              <div className="nav-link text-light">Sobre</div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  </nav>
);
