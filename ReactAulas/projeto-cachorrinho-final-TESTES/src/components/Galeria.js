
import { Fragment } from "react";
import { useEffect } from "react";

import { getPets } from "../services/postServices";

import "../styles/Galeria.css";

import DonateIcon from "../img/donate-icon.png";
import { useState } from "react";

function Galeria() {
  const [pets, setPets] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: postsInfo } = await getPets();
        const { pets } = postsInfo;
        console.log("Console PETS", pets);
        setPets(pets);
      } catch {
        console.log("Deu erro macho.");
      }
    };

    fetchData();
  }, []);

  if (!pets) return "loading";

  return (
    <Fragment>
      <section className="galeria">
        <h1 className="titulo-galeria">Pets para você adotar</h1>
        <h4>
          Adotar é um ato consciente e abandonar é crime. Não adote por impulso,
          adote por amor!
        </h4>

        <div className="pets">
          {pets.map((pet) =>
            pet.adopted === false ? (
              <div key={pet.id} className="box-pets">
                <img alt="imagens=pets"clasName="img" src={pet.url} />
                <div className="box-text">
                  <h3>
                    Nome: {pet.name} <br /> Sexo: {pet.gender} <br />
                    Idade: {pet.age}
                  </h3>
                  <img alt="icon-donate"
                    style={{ width: "40px", height: "40px" }}
                    src={DonateIcon}
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
