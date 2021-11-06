import { Fragment, useState } from "react";
import Modal from "react-modal";
import ModalLogin from "../modals/ModalLogin";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import Brandlogo from "../img/brand-logo.png";

import { Link } from "react-scroll";

import "../styles/Nav.css";




function Nav() {

  /* useState para mundança de estado do modal e menu mobile*/
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  console.log(menu);


  /* funçoes para abrir e fechar modal e menu mobile*/
  function abreMenu() {
    setMenu(true);
  }
  function fechaMenu() {
    setMenu(false);
  }

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }


  /* estilização do modal */
  const customStyles = {
    content: {
      minWidth: "330px",

      inset: "200px 20px 200px 20px",
      WebkitOverflowScrolling: "touch",
      borderRadius: "10px",
      boxShadow: "4px 6px 10px 4px",
      animation: "slidedown 2s ease, go-back 1s infinite alternate",

      padding: "0px",
      backgroundColor: "transparent",
    },
  };

  /*menu, menu mobile e modal de login*/
  return (
    <Fragment>
      <nav className="navbar">
        <div className="logo">
          <img src={Brandlogo} alt="logo-pequena" />
        </div>

        <div className="menu">
          <Link to="" alt="login" onClick={() => handleOpenModal()}>
            LOGIN
          </Link>

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
          <Link
            activeClass="active"
            to="contato"
            spy={true}
            offset={-100}
            smooth={true}
            duration={2000}
          >
            CONTATO
          </Link>
        </div>
        <div className="nav-mobile">
          {!menu ? (
            <MenuRoundedIcon
              onClick={() => abreMenu()}
              style={{ color: "#BF9D69", width: "60px", height: "60px" }}
            />
          ) : (
            <CloseRoundedIcon
              onClick={() => fechaMenu()}
              style={{ color: "#BF9D69", width: "60px", height: "60px" }}
            />
          )}
        </div>
      </nav>
      {menu ? (
        <div className="menu-responsivo">
          <Link to="" alt="login" onClick={() => handleOpenModal()}>
            LOGIN
          </Link>

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
          <Link
            to=""
            activeClass="active"
            // eslint-disable-next-line
            to="contato"
            spy={true}
            offset={-100}
            smooth={true}
            duration={2000}
          >
            CONTATO
          </Link>
        </div>
      ) : null}
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
