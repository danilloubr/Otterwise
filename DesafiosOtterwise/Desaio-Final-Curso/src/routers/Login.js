import { Fragment, useEffect, useState, useContext } from "react";
import Modal from "react-modal";

import DonateIcon from "../img/donate-icon.png";
import EditIcon from "../img/edit-icon.png";
import DeleteIcon from "../img/delete-icon.png";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { deletePets, getPets, postPets } from "../services/postServices";
import { AuthContext } from "../contexts/AuthContext";

import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

import "../styles/RouterLogin.css";
import "../styles/ModalDeletar.css";

/* estilização das tabela de pets*/
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
    minWidth: 115,
  },
}));

/* estilização do modal*/
const customStyles = {
  overlay: {
    position: "fixed",
    inset: "0px",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    top: "",
    bottom: "500px",
    border: "100px",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    animation: "slidedown 1s ease, go-back 1s infinite alternate",
    padding: "20px 15px",
    backgroundColor: "transparent",
  },
};

function Login() {
  /* função para fazer logout do sistma*/
  const { logout } = useContext(AuthContext);
  /*useForm para registrar os dados do formulário*/
  const { register, handleSubmit } = useForm();
  /*useHistory para navegar usuário ate o url específico*/
  const history = useHistory();

  /*este Id é para levar para a pagina de edição o pet específico */
  const handleNavigationEditId = (id) => {
    history.push(`/login/${id}`);
  };

  /*este Id é para levar para a pagina de adoção o pet específico */
  const handleNavigationEditAdopted = (id) => {
    history.push(`/editadopted/${id}`);
  };
  
  /*useState para mudança de valor da tabela de pets*/
  const [tabela, setTabela] = useState();

  /*useState para mudança de valor do input Select*/
  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");

  /*useState para abrir e fechar modal*/
  const [modalCadastroOpen, setModalCadastroOpen] = useState(false);
  const [modalDeletarOpen, setModalDeletarOpen] = useState(false);


  /*função para deslogar usuário*/
  function goLogout() {
    logout();
    toast.success("Você foi desconectado com sucesso!");
  }

  /*funções para abrir de fechar modals*/
  function handleOpenModalDeletar(id) {
    setModalDeletarOpen(id);
  }

  function handleCloseModalDeletar() {
    setModalDeletarOpen(false);
  }

  function handleOpenModalCadastro() {
    setModalCadastroOpen(true);
  }

  function handleCloseModalCadastro() {
    setModalCadastroOpen(false);
  }


  /*useEffect para carregar a listagem de pets na tabela*/
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
  }, []);

  /*barreira para se nao houver valor válido em tabelo não renderiza nada na tela*/
  if (!tabela) return false;

  /*função para postar o pet vindo do formulário cadastrar*/
  const onSubmit = async (data) => {
    try {
      const { data: resp } = await postPets(data);
      const { pets } = resp;
      console.log(pets);

      const { data: postsInfo } = await getPets();

      handleCloseModalCadastro();
      toast.success("Pet cadastrado com sucesso!");
      setTabela(postsInfo.pets);
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar cadastrar o Pet");
    }
  };

  /*função para deletar o pet específico*/
  const handleDelete = async (id) => {
    try {
      const { data: resp } = await deletePets(id);
      console.log("PETS DELE", resp);
      handleCloseModalDeletar();
      toast.success("Pet excluído da adoção!");
      setTabela(resp);
    } catch (error) {
      toast.error("Ocorreu um erro ao deletar o seu pet!");
    }
  };

/*mudar o valor do evento do input*/
  const handleChangeEspecie = (event) => {
    setEspecie(event.target.value);
  };

  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };


/*tabela, tabela mobile, modal*/
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
                  <StyledTableCell align="center">Nome</StyledTableCell>
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
                  ({ id, age, breed, gender, name, species, adopted, url }) => (
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
                            cursor: adopted ? "initial" : "pointer",
                            textAlign: "center",
                            alignItems: "center",
                            width: "25px",
                            height: "25px",
                            marginRight: "10px",
                            opacity: adopted ? "30%" : "100%",
                          }}
                          src={DonateIcon}
                          onClick={
                            adopted ? {} : () => handleNavigationEditAdopted(id)
                          }
                        ></img>
                        <img
                          alt="icone-edit"
                          style={{ cursor: "pointer", marginRight: "10px" }}
                          src={EditIcon}
                          onClick={() => handleNavigationEditId(id)}
                        ></img>
                        <img
                          alt="icone-delete"
                          style={{ cursor: "pointer", marginRight: "10px" }}
                          src={DeleteIcon}
                          onClick={() => handleOpenModalDeletar(id)}
                        ></img>
                      </StyledTableCell>
                    </StyledTableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <section className="pagina-total-mobile">
          <div className="container2-mobile">
            <TableContainer component={Paper}>
              <h2>LISTA DE PETS</h2>
              <Table sx={{ textAlign: "center" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Nome</StyledTableCell>

                    <StyledTableCell align="center">Adotado</StyledTableCell>
                    <StyledTableCell align="center">Ações</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tabela.map(
                    ({
                      id,

                      name,

                      adopted,
                    }) => (
                      <StyledTableRow key={id}>
                        <StyledTableCell
                          component="th"
                          align="center"
                          scope="row"
                        >
                          {name}
                        </StyledTableCell>

                        <StyledTableCell align="center">
                          {adopted ? "Sim" : "Não"}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <img
                            alt="icone-doação"
                            style={{
                              cursor: adopted ? "initial" : "pointer",
                              textAlign: "center",
                              alignItems: "center",
                              width: "25px",
                              height: "25px",
                              marginRight: "5px",
                              opacity: adopted ? "30%" : "100%",
                            }}
                            src={DonateIcon}
                            onClick={
                              adopted
                                ? undefined
                                : () => handleNavigationEditAdopted(id)
                            }
                          ></img>
                          <img
                            alt="icone-edit"
                            style={{ cursor: "pointer", marginRight: "5px" }}
                            src={EditIcon}
                            onClick={() => handleNavigationEditId(id)}
                          ></img>
                          <img
                            alt="icone-delete"
                            style={{ cursor: "pointer", marginRight: "5px" }}
                            src={DeleteIcon}
                            onClick={() => handleOpenModalDeletar(id)}
                          ></img>
                        </StyledTableCell>
                      </StyledTableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </section>

        <div className="container3">
          <button className="botao-tabela" onClick={handleOpenModalCadastro}>
            ENTRADA DE PET
          </button>
          <button className="botao-tabela" onClick={() => goLogout()}>
            SAIR
          </button>
        </div>
      </section>

      <Modal
        isOpen={modalDeletarOpen}
        onRequestClose={handleCloseModalDeletar}
        style={customStyles}
        name="MODAL-DELETAR"
      >
        <section className="container-delete">
          <div>
            <h2>Certeza de que deseja remover o pet da lista de adoção?</h2>
          </div>
          <div className="div-botao-deletar">
            <button
              onClick={() => {
                handleDelete(modalDeletarOpen);
              }}
            >
              SIM
            </button>
            <button onClick={handleCloseModalDeletar}>NÃO</button>
          </div>
        </section>
      </Modal>

      <Modal
        isOpen={modalCadastroOpen}
        onRequestClose={handleCloseModalCadastro}
        style={customStyles}
      >
        <form className="modal-cadastro" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="titulo-cadastro">Cadastro de novo pet</h2>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField {...register("name")} variant="outlined" label="Nome" />
            <TextField {...register("breed")} variant="outlined" label="Raça" />
            <TextField {...register("age")} label="Idade" type="number" />

            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="especie">Espécie</InputLabel>
              <Select
                {...register("species")}
                labelId="species"
                id="species"
                value={especie}
                onChange={handleChangeEspecie}
                autoWidth
                label="Espécie"
                type="text"
                variant="outlined"
              >
                <MenuItem value={"Cachorro"}>Cachorro</MenuItem>
                <MenuItem value={"Gato"}>Gato</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Sexo
              </InputLabel>
              <Select
                {...register("gender")}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={sexo}
                onChange={handleChangeSexo}
                autoWidth
                label="gender"
                type="text"
              >
                <MenuItem value={"Macho"}>Macho</MenuItem>
                <MenuItem value={"Fêmea"}>Fêmea</MenuItem>
              </Select>
            </FormControl>
            <TextField {...register("url")} label="URL" type="text" />
          </Box>
          <div className="container4">
            <button type="submit">CADASTRAR</button>
            <button onClick={handleCloseModalCadastro}>CANCELAR</button>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
}

export default Login;
