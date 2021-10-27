import React from "react";
import { Link } from "react-router-dom";

import "../styles/navStyle.css"

const Header = ({ title }) => {
  return (
    <div className="div-nav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gettasks">Listas de Tarefas</Link>
          </li>
          
        </ul>
      </nav>

      <h1 className ="titulo-header">{title}</h1>
    </div>
  );
};

export default Header;
