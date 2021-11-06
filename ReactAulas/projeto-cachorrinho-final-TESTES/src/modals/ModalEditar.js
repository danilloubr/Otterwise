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

import "../styles/ModalId.css";

function ModalEditar({handleCloseModalEditar, id}) {
  /*Mudança de estado da API*/

  const [getPet, setGetPet] = useState([])

  /*Mudança de estado dos compornetes do Formulário*/
  const [adotado, setAdotado] = useState(false);
  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");

  /*Modal no estado "true" para montar o componete na renderização da página */
  // const [modalAdotarOpen, setModalAdotarOpen] = useState(true);
  
  /*Navegação via useHistory para quando dar o submit no formulário, navegar para (./login) e para se desejar
  cancelar a ação tambem ir para (./login) */
 
  
  //Função para voltar para (./login) via useHistory
 

  
  /*useForm para capturar e registrar os campos do formulário [ele quem cria o data internamente]*/
  const { register, handleSubmit } = useForm();
  
  

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
  // function handleCloseModalAdotar() {
  //   setModalAdotarOpen(false);
  // }

/* Esse useEffects é para colocar as informações vindo da Pagina Login [do botão editar em (/login)] via useParams  para o 
  Formulário ja vim preenchido recebendo o ID e o o corpo dos campos, assim podendo mofificar oque quiser e chamar a função 
  "handleEdit" que está nessa rota.*/

  useEffect(() => {
    const fetchData = async (data) => {
      try {
        const { data: postsInfo } = await getPetId(id, data);
        const { pet } = postsInfo;

        
        setGetPet(pet);
        handleCloseModalEditar()
      } catch {
        console.log("Deu erro macho.");
      }
    };

    fetchData();
  }, []);


  /* Com as informações ediadas vamos chamar a função "handleEdit" para dar um PUT via axios e voltar para a rota (./login) com as 
  informações editadas */

  const handleEdit = async (data) => {
    try {
      console.log(data);
      const { data: resp } = await editPet(id, data);
      console.log(resp);

      handleCloseModalEditar()
      toast.success("Tarefa editada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("EITA, algo deu errado. Preencha o Título e a Descrição!");
    }

    console.log("DATA AQUI:", data);
  };

  

  

  //Barreira se não existir formulário não renderiza nada
  if (!getPet) return null;

 
  return (
    <Fragment>
      
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
              <button onClick={handleCloseModalEditar()}>CANCELAR</button>
            </div>
          </form>
        </section>
      
    </Fragment>
  );
}

export default ModalEditar;
