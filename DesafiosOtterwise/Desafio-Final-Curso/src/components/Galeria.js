import { Fragment, useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { getPets } from "../services/postServices";
import DonateIcon from "../img/donate-icon.png";

import "../styles/Galeria.css";

/* props setLevaNome vindo da Main */
function Galeria({ setLevaNome }) {
  const [petsList, setPetsList] = useState();


  /* useEffect para mostrar a lista de Pets na tela*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: postsInfo } = await getPets();
        const { pets } = postsInfo;
        console.log("Console PETS", pets);
        setPetsList(pets);
      } catch {
        console.log("Deu erro macho.");
      }
    };

    fetchData();
    return () => {};
  }, [setPetsList]);

  /* barreira para so mostrar o conteúdo quando petsList 
  tiver um valor*/

  if (!petsList)
    return (
      <CircularProgress
        value={petsList}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    );


    /* galeria de Pets*/
  return (
    <Fragment>
      <section className="galeria">
        <h1 className="titulo-galeria">Pets para você adotar</h1>
        <h4 className=" description-galeria">
          Adotar é um ato consciente e abandonar é crime. Não adote por impulso,
          adote por amor!
        </h4>

        <div className="pets">
          {petsList.map((pet) =>
            pet.adopted === false ? (
              <div key={pet.id} className="box-pets">
                {pet.url ? (
                  <img alt="imagens=pets" className="img" src={pet.url} />
                ) : null}
                <div className="box-text">
                  <h3>
                    Nome: {pet.name} <br /> Sexo: {pet.gender} <br />
                    Idade: {pet.age}
                  </h3>
                  <img
                    alt="Adotar"
                    style={{ width: "40px", height: "40px", cursor: "pointer" }}
                    src={DonateIcon}
                    title="Adotar"
                    onClick={() =>
                      setLevaNome(
                        `Olá Otterwise Pets, estou querendo adotar ${pet.name}, como faço para tornar isso realidade?`
                      )
                    }
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </section>
    </Fragment>
  );
}

export default Galeria;
