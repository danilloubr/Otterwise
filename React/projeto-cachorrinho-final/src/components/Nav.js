import { Fragment } from "react"


import "../styles/Nav.css"
import Brandlogo from "../img/brand-logo.png"



function Nav() {
  return (
  
  
  <Fragment>
       <nav className="navbar">
        <div id="logo">
         <img src={Brandlogo}></img>
        </div>
        <i class="bi bi-list" id="botao-abrir"></i>
        <i class="bi bi-x" id="botao-fechar"></i>
        <div id="menu">
          <a href="#" id="galeria">LOGIN</a>
          <a href="#" id="contato">GALERIA</a>
          <a href="#" id="social">CONTATO</a>
        </div>

        <div className="menu-responsivo">
          <a href="#" id="galeria">LOGIN</a>
          <a href="#" id="contato">GALERIA</a>
          <a href="#" id="social">CONTATO</a>
        </div>
      </nav>
  </Fragment>
  )
}

export default Nav
