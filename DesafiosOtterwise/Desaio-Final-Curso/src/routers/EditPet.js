import { editPet, getPetId } from "../services/postServices";

import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

import "../styles/ModalEditPet.css";

function EditPet() {

  /*Mudança de estado da API*/
  const [getPet, setGetPet] = useState([]);

  /*Mudança de estado dos compornetes do Formulário*/
  const [adotado, setAdotado] = useState("");
  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");

  /*Modal no estado "true" para montar o componete na renderização da página */
  const [modalEditarOpen, setModalEditarOpen] = useState(true);
  
  /*Navegação via useHistory para quando dar o submit no formulário, navegar para (./login) e para se desejar
  cancelar a ação tambem ir para (./login) */
  const history = useHistory();
  
  //Função para voltar para (./login) via useHistory
  const goLogin = () => {
    history.push("/login");
  };


  /*usePamans para trazer via url o ID do campo do formulário que foi selecionado*/
  const { id } = useParams();
  
  /*useForm para capturar e registrar os campos do formulário [ele quem cria o data internamente]*/
  const { register, handleSubmit } = useForm();
  
  
  /*Estilização do Modal*/
  const customStyles = {

    overlay: {
      position: "fixed",
      inset: "0px",
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    content: {

      
      top: "",
      bottom: "500px",
      left: "",
      right: "",
      border: "100px",

      WebkitOverflowScrolling: "touch",
      borderRadius: "10px",
      boxShadow:" 3px 8px 17px -1px rgba(0,0,0,0.73)",
      animation: "slidedown 1s ease, go-back 1s infinite alternate",
      padding: "0px",
      backgroundColor: "transparent",
    },
  };

  // Funções para capturar a mudança do valor dos campos Select
  const handleChangeAdopted = (event) => {
    setAdotado(event.target.value);
  };

  const handleChangeEspecie = (event) => {
    setEspecie(event.target.value);
  };

  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };
  function handleCloseModalAdotar() {
    setModalEditarOpen(false);
  }

/* Esse useEffects esta pegando o ID vindo via useParams, e com esse ID fazemos uma requisição via axios no modo getPetId pegando o PET 
  específico para edição */

  useEffect(() => {
    const fetchData = async (data) => {
      try {
        const { data: postsInfo } = await getPetId(id, data);
        const { pet } = postsInfo;

        console.log("Console PET", postsInfo);
        setGetPet(pet);
      } catch {
        console.log("Deu erro macho.");
      }
    };

    fetchData();
  }, [id]);


  /* Com as informações ediadas vamos chamar a função "handleEdit" para dar um PUT via axios e voltar para a rota (./login) com as 
  informações editadas */

  const handleEdit = async (data) => {
    try {
      console.log(data);
      const { data: resp } = await editPet(id, data);
      console.log(resp);

      toast.success("Pet editada com sucesso!");
      handleCloseModalAdotar()
      history.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("EITA, algo deu errado, por favor refeja os campos.");
    }

    console.log("DATA AQUI:", data);
  };

  

  //Barreira se não existir formulário não renderiza nada
  if (!getPet) return null;

  //Console log KKKKK
  console.log("Pet Específico: Adotado?", getPet.adopted);

  return (
    <Fragment>
      <Modal
        isOpen={modalEditarOpen}
        onRequestClose={() =>goLogin()}
        style={customStyles}
       
      >
        <section className="modal-cadastro">
          <form onSubmit={handleSubmit(handleEdit)}>
            <h2 className="titulo-cadastro">Editar Pet</h2>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField {...register("name")} label={getPet.name} />
              <TextField
                {...register("breed")}
                
                label={getPet.breed}
                type="text"
              />
              <TextField
                {...register("age")}
                
                label={getPet.age}
                type="number"
              />

              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="especie">Espécie</InputLabel>
                <Select
                  {...register("species")}
                  labelId="especie"
                  id="especie"
                  value={especie}
                  onChange={handleChangeEspecie}
                  autoWidth
                  label={getPet.species}
                  type="select"
                >
                  <MenuItem value={"Cachorro"}>Cachorro</MenuItem>
                  <MenuItem value={"Gato"}>Gato</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="adopted">Adotado</InputLabel>
                <Select
                  {...register("adopted")}
                  labelId="adopted"
                  id="adopted"
                  value={adotado}
                  onChange={handleChangeAdopted}
                  autoWidth
                  label={getPet.adopted}
                  type="select"
                >
                  <MenuItem value={true}>Adotado</MenuItem>
                  <MenuItem value={false}>Não Adotado</MenuItem>
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
                  label={getPet.gender}
                  type="select"
                >
                  <MenuItem value={"Macho"}>Macho</MenuItem>
                  <MenuItem value={"Fêmea"}>Fêmea</MenuItem>
                </Select>
              </FormControl>
              <TextField {...register("url")} label={getPet.url} type="text" />
            </Box>
            <div className="container4">
              <button type="submit">SALVAR</button>
              <button onClick={() => goLogin()}>CANCELAR</button>
            </div>
          </form>
        </section>
      </Modal>
    </Fragment>
  );
}

export default EditPet;
