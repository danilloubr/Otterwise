import { useState, useEffect } from "react";
import "../styles/ModalCadastro.css";
import { toast } from "react-toastify";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useForm } from "react-hook-form";
import { postPets } from "../services/postServices";

import { useHistory } from "react-router";

import { getPets } from "../services/postServices";

function ModalCadastro({handleCloseModalCadastro}) {
  const history = useHistory();

  const goLogin = () => {
    return history.push("./login");
  };
  const [tabela, setTabela] = useState([]);

  const [species, setEspecie] = useState("");
  const [gender, setSexo] = useState("");

  const { register, handleSubmit } = useForm();

 

  const onSubmit = async (data) => {
    try {
      const { data: resp } = await postPets(data);
      const { pets } = resp;

      console.log("PETS DO RESP", pets)

      handleCloseModalCadastro();
      goLogin()
      toast.success("Pet cadastrado com sucesso!");
      setTabela(pets)
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar cadastrar o Pet");
    }
  };

  if (!tabela) return false;
  

  const handleChangeEspecie = (event) => {
    setEspecie(event.target.value);
  };

  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };

  return (
    
    <form
    className="modal-cadastro"
    onSubmit={handleSubmit(onSubmit)}
  >
    <h2 className="titulo-cadastro">
      Cadastro de novo pet
    </h2>
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
      <TextField
        {...register("name")}
        variant="outlined"
        label="Nome"
      />
      <TextField
        {...register("breed")}
        variant="outlined"
        label="Raça"
      />
      <TextField
        {...register("age")}
        label="Idade"
        type="number"
      />

      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="especie">Espécie</InputLabel>
        <Select
          {...register("species")}
          labelId="species"
          id="species"
          value={species}
          onChange={handleChangeEspecie}
          autoWidth
          label="Espécie"
          type="text"
          variant="outlined"
        >
          <MenuItem value={"Cachorro"}>
            Cachorro
          </MenuItem>
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
          value={gender}
          onChange={handleChangeSexo}
          autoWidth
          label="gender"
          type="text"
        >
          <MenuItem value={"Macho"}>Macho</MenuItem>
          <MenuItem value={"Fêmea"}>Fêmea</MenuItem>
        </Select>
      </FormControl>
      <TextField
        {...register("url")}
        label="URL"
        type="text"
      />
    </Box>
    <div className="container4">
      <button type="submit">CADASTRAR</button>
      <button onClick={handleCloseModalCadastro()}>
        CANCELAR
      </button>
    </div>
  </form>
    
  );
}

export default ModalCadastro;
