
import { Fragment, useState } from "react";
import Modal from "react-modal";

import "../styles/Nav.css";
import Brandlogo from "../img/brand-logo.png";
import ModalLogin from "../modals/ModalLogin";

import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  const customStyles = {
    content: {
      position: "absolute",
      top: "200px",
      left: "200px",
      right: "200px",
      bottom: "200px",
      border: "100px",
      WebkitOverflowScrolling: "touch",
      borderRadius: "10px",
      boxShadow: "4px 6px 10px 4px",
      animation: "slidedown 2s ease, go-back 1s infinite alternate",

      padding: "0px",
      backgroundColor: "transparent",
    },
  };

  return (
    <Fragment>
      <nav className="navbar">
        <div className="logo">
          <img src={Brandlogo} alt="logo-pequena" />
        </div>
        {/* <i class="bi bi-list" id="botao-abrir"></i>
        <i class="bi bi-x" id="botao-fechar"></i> */}
        <div className="menu">
          <Link to="" alt="login" onClick={handleOpenModal}>LOGIN</Link>

          <Link
            activeClass="active"
            to="pets"
            spy={true}
            offset={-100}
            smooth={true}
            duration={1000}
          >
            GALERIA
          </Link>
          <Link to=""  onClick={() => scroll.scrollMore(5000, { duration: 3000 })}>
            CONTATO
          </Link>
        </div>

        {/* <div className="menu-responsivo">
          <a id="galeria">LOGIN</a>
          <a id="contato">GALERIA</a>
          <a id="social">CONTATO</a>
        </div> */}
      </nav>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <ModalLogin />
      </Modal>
    </Fragment>
  );
}

export default Nav;
