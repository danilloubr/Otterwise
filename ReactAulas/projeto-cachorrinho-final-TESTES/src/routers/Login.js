import { Fragment, useEffect, useState } from "react";
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
import { getPets } from "../services/postServices";
// import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
// import { flexbox } from "@mui/system";

import "../styles/ModalCadastro.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { useHistory, useParams } from "react-router";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#FBF1E4",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const customStyles = {
  content: {
    top: "",

    bottom: "350px",
    border: "100px",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    boxShadow: "4px 6px 10px 4px",
    animation: "slidedown 1s ease, go-back 1s infinite alternate",
    padding: "0px",
    backgroundColor: "transparent",
  },
};

function Login() {
  const { logout } = useContext(AuthContext);

  const [tabela, setTabela] = useState([]);

  const [modalCadastroOpen, setModalCadastroOpen] = useState(false);
  const [modalEditarOpen, setModalEditarOpen] = useState(false);
  const [modalDeletarOpen, setModalDeletarOpen] = useState(false);
  const [modalAdotarOpen, setModalAdotarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: postsInfo } = await getPets();
        const { pets } = postsInfo;

        setTabela(pets);
      } catch {
        console.log("Deu erro macho.");
      }
    };

    fetchData();
  }, [modalDeletarOpen, modalEditarOpen, modalCadastroOpen]);

  if (!tabela) return false;

  function goLogout() {
    logout();
    toast.success("Você foi desconectado com sucesso!");
  }

  function handleOpenModalAdotar() {
    setModalAdotarOpen(true);
  }

  function handleCloseModalAdotar() {
    setModalAdotarOpen(false);
  }
  function handleOpenModalDeletar(id) {
    setModalDeletarOpen(id);
  }

  function handleCloseModalDeletar() {
    setModalDeletarOpen(false);
  }
  function handleOpenModalEditar(id) {
    setModalEditarOpen(id);
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

  if (!tabela) return false;

  console.log("PETS 1", tabela);

  return (
    <Fragment>
      <section className="pagina-total">
        <div className="container1">
          <div className="tabela1">
            <p>Total de Pets</p>
            <p className="numero-tabela">{tabela.length}</p>
          </div>
          <div className="tabela2">
            <p>Total de Pets adotados</p>
            <p className="numero-tabela">
              {tabela.reduce((acc, elem) => {
                return acc + elem.adopted;
              }, 0)}
            </p>
          </div>
        </div>
        <div className="container2">
          <TableContainer component={Paper}>
            <h2>LISTA DE PETS</h2>
            <Table sx={{ textAlign: "center" }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nome</StyledTableCell>
                  <StyledTableCell align="center">Raça</StyledTableCell>
                  <StyledTableCell align="center">Idade</StyledTableCell>
                  <StyledTableCell align="center">Espécie</StyledTableCell>
                  <StyledTableCell align="center">Sexo</StyledTableCell>
                  <StyledTableCell align="center">Adotado</StyledTableCell>
                  <StyledTableCell align="center">Ações</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tabela.map(
                  ({ id, age, breed, gender, name, species, adopted }) => (
                    <StyledTableRow key={id}>
                      <StyledTableCell
                        component="th"
                        align="center"
                        scope="row"
                      >
                        {name}
                      </StyledTableCell>
                      <StyledTableCell align="center">{breed}</StyledTableCell>
                      <StyledTableCell align="center">{age}</StyledTableCell>
                      <StyledTableCell align="center">
                        {species}
                      </StyledTableCell>
                      <StyledTableCell align="center">{gender}</StyledTableCell>
                      <StyledTableCell align="center">
                        {adopted ? "Sim" : "Não"}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <img
                          alt="icone-doação"
                          style={{
                            cursor: "pointer",
                            textAlign: "center",
                            alignItems: "center",
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
                          onClick={() => handleOpenModalEditar(id)}
                        ></img>
                        <img
                          alt="icone-delete"
                          style={{ cursor: "pointer", marginRight: "10px" }}
                          src={DeleteIcon}
                          onClick={() => handleOpenModalDeletar(id)}
                        ></img>
                        <Modal
                          isOpen={modalAdotarOpen}
                          onRequestClose={handleCloseModalAdotar}
                          style={customStyles}
                          name="MODAL-ADOTAR"
                        >
                          <ModalAdotar />
                        </Modal>
                      </StyledTableCell>
                    </StyledTableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Modal
            isOpen={modalEditarOpen}
            onRequestClose={handleCloseModalEditar}
            style={customStyles}
            name="MODAL-EDITAR"
          >
            <ModalEditar
              handleCloseModalEditar={() => handleCloseModalEditar}
              id={modalEditarOpen}
            />
          </Modal>
          <Modal
            isOpen={modalDeletarOpen}
            onRequestClose={handleCloseModalDeletar}
            style={customStyles}
            name="MODAL-DELETAR"
          >
            <ModalDeletar
              handleCloseModalDeletar={() => handleCloseModalDeletar()}
              id={modalDeletarOpen}
            />
          </Modal>
          <Modal
            isOpen={modalCadastroOpen}
            onRequestClose={handleCloseModalCadastro}
            style={customStyles}
            name="MODAL-CADASTRO"
          >
            <ModalCadastro
              handleCloseModalCadastro={() =>handleCloseModalCadastro}
            />
          </Modal>
        </div>
        <div className="container3">
          <button className="botao-tabela" onClick={handleOpenModalCadastro}>
            ENTRADA DE PET
          </button>
          <button className="botao-tabela" onClick={() => goLogout()}>
            SAIR
          </button>
        </div>
      </section>
    </Fragment>
  );
}

export default Login;
