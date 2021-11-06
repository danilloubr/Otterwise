import React from "react";
import { Link } from "react-router-dom";

import "../styles/navStyle.css"

const Nav = ({ logo }) => {
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

      <h1 className ="titulo-header">{logo}</h1>
    </div>
  );
};

export default Nav;
