import { Fragment, useState } from "react";
import Modal from "react-modal";

import DonateIcon from "../img/donate-icon.png";
import EditIcon from "../img/edit-icon.png";
import DeleteIcon from "../img/delete-icon.png";

import "../styles/RouterLogin.css";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModalCadastro from "../modals/ModalCadastro";
import ModalEditar from "../modals/ModalEditar";
import ModalDeletar from "../modals/ModalDeletar";
import ModalAdotar from "../modals/ModalAdotar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    // backgroundColor: "#FBF1E4" #E6BC7E",
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#FBF1E4",
    // backgroundColor: "white",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    // backgroundColor: "black",
    border: 0,
  },
}));

function createData(nome, raça, idade, especie, sexo, adotado, açoes) {
  return { nome, raça, idade, especie, sexo, adotado, açoes };
}

const rows = [
  createData("Luna", "Vira-lata", 10, "Cachorro", "Feminino", "Não"),
  createData("Cida", "Budogue", 15, "Cachorro", "Feminino", "Não"),
  createData("Carlos", "Pastor-Alemão", 4, "Cachorro", "Masculino", "Sim"),

  createData("Jiraia", "Vira-lata", 21, "Cachorro", "Feminino", "Sim"),
  createData("Zacquinha", "Golden", 4, "Cachorro", "masculino", "Não"),
];

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
    top: "",
    left: "200px",
    right: "200px",
    bottom: "350px",
    border: "100px",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    boxShadow: "4px 6px 10px 4px",
    animation: "slidedown 1s ease, go-back 1s infinite alternate",
    // animation: "",
    padding: "0px",
    backgroundColor: "transparent",
  },
};

function Login() {
  const [modalCadastroOpen, setModalCadastroOpen] = useState(false);
  const [modalEditarOpen, setModalEditarOpen] = useState(false);
  const [modalDeletarOpen, setModalDeletarOpen] = useState(false);
  const [modalAdotarOpen, setModalAdotarOpen] = useState(false);
  
  function handleOpenModalAdotar() {
    setModalAdotarOpen(true);
  }

  function handleCloseModalAdotar() {
    setModalAdotarOpen(false);
  }
  function handleOpenModalDeletar() {
    setModalDeletarOpen(true);
  }

  function handleCloseModalDeletar() {
    setModalDeletarOpen(false);
  }
  function handleOpenModalEditar() {
    setModalEditarOpen(true);
  }

  function handleCloseModalEditar() {
    setModalEditarOpen(false);
  }

  function handleOpenModalCadastro() {
    setModalCadastroOpen(true);
  }

  function handleCloseModalCadastro() {
    setModalCadastroOpen(false);
  }
  return (
    <Fragment>
      <section className="pagina-total">
        <div className="container1">
          <div className="tabela1">
            <p>Total de Pets</p>
            <p className="numero-tabela">6</p>
          </div>
          <div className="tabela2">
            <p>Total de Pets adotados</p>
            <p className="numero-tabela">2</p>
          </div>
        </div>
        <div className="container2">
          <TableContainer component={Paper}>
            <h2>LISTA DE PETS</h2>
            <Table sx={{ alignItems: "center" }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nome</StyledTableCell>
                  <StyledTableCell align="right">Raça</StyledTableCell>
                  <StyledTableCell align="right">Idade</StyledTableCell>
                  <StyledTableCell align="right">Espécie</StyledTableCell>
                  <StyledTableCell align="right">Sexo</StyledTableCell>
                  <StyledTableCell align="right">Adotado</StyledTableCell>
                  <StyledTableCell align="center">Ações</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.nome}>
                    <StyledTableCell component="th" scope="row">
                      {row.nome}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.raça}</StyledTableCell>
                    <StyledTableCell align="right">{row.idade}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.especie}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.sexo}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.adotado}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.açoes}</StyledTableCell>
                    <img
                      alt="icone-doação"
                      style={{
                        cursor: "pointer",
                        alignItems: "left",
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                      }}
                      src={DonateIcon}
                      onClick={handleOpenModalAdotar}
                    ></img>
                    <img
                      alt="icone-edit"
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      src={EditIcon}
                      onClick={handleOpenModalEditar}
                    ></img>
                    <img
                      alt="icone-delete"
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      src={DeleteIcon}
                      onClick={handleOpenModalDeletar}
                    ></img>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="container3">
          <button className="botao-tabela" onClick={handleOpenModalCadastro}>
            ENTRADA DE PET
          </button>
          <button className="botao-tabela">SAIR</button>
        </div>
      </section>
      <Modal
        isOpen={modalCadastroOpen}
        onRequestClose={handleCloseModalCadastro}
        style={customStyles}
      >
        <ModalCadastro />
      </Modal>
      <Modal
        isOpen={modalEditarOpen}
        onRequestClose={handleCloseModalEditar}
        style={customStyles}
      >
        <ModalEditar/>
      </Modal>
      <Modal
        isOpen={modalDeletarOpen}
        onRequestClose={handleCloseModalDeletar}
        style={customStyles}
      >
        <ModalDeletar/>
      </Modal>
      <Modal
        isOpen={modalAdotarOpen}
        onRequestClose={handleCloseModalAdotar}
        style={customStyles}
      >
        <ModalAdotar/>
      </Modal>
      
    </Fragment>
  );
}

export default Login;
