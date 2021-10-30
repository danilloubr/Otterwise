import { Fragment, useState } from "react";
import "../styles/ModalCadastro.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import { useHistory } from "react-router";

function ModalEditar() {
//   const history = useHistory();

//   function goLogin() {
//     return history.push("/login");
//   }

  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");

  const handleChangeEspecie = (event) => {
    setEspecie(event.target.value);
  };

  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };

  
  

  return (
    <Fragment>
      <section className="modal-cadastro">
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
          <TextField label="Nome" />
          <TextField label="Raça" />
          <TextField label="Idade" />

          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="especie">Espécie</InputLabel>
            <Select
              labelId="especie"
              id="especie"
              value={especie}
              onChange={handleChangeEspecie}
              autoWidth
              label="Espécie"
            >
              <MenuItem value={0}>Cachorro</MenuItem>
              <MenuItem value={1}>Gato</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Sexo
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={sexo}
              onChange={handleChangeSexo}
              autoWidth
              label="Espécie"
            >
              <MenuItem value={0}>Macho</MenuItem>
              <MenuItem value={1}>Fêmea</MenuItem>
            </Select>
          </FormControl>
          <TextField label="URL" />
        </Box>
        <div className="container4">
        <button>SALVAR</button>
        <button>CANCELAR</button>
        </div>
      </section>
    </Fragment>
  );
}

export default ModalEditar;
