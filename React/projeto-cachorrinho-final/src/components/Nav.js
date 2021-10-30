/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState } from "react";
import Modal from "react-modal";

import "../styles/Nav.css";
import Brandlogo from "../img/brand-logo.png";
import LoginModal from "../modals/ModalLogin";

function Nav() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  const customStyles = {
    // overlay: {
    //   position: 'fixed',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   backgroundColor: 'rgba(255, 255, 255, 0.75)'
    // },
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
      // animation: "",
      padding: "0px",
      backgroundColor: "transparent"
    },
  };

  return (
    <Fragment>
      <nav className="navbar">
        <div id="logo">
          <img src={Brandlogo} alt="logo-pequena" />
        </div>
        <i class="bi bi-list" id="botao-abrir"></i>
        <i class="bi bi-x" id="botao-fechar"></i>
        <div id="menu">
          <a href="#" id="galeria" onClick={handleOpenModal}>
            LOGIN
          </a>
          <a href="#" id="contato">
            GALERIA
          </a>
          <a href="#" id="social">
            CONTATO
          </a>
        </div>

        <div className="menu-responsivo">
          <a href="#" id="galeria">
            LOGIN
          </a>
          <a href="#" id="contato">
            GALERIA
          </a>
          <a href="#" id="social">
            CONTATO
          </a>
        </div>
      </nav>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <LoginModal />
      </Modal>
    </Fragment>
  );
}

export default Nav;
