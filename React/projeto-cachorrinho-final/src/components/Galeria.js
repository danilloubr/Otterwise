/* eslint-disable jsx-a11y/alt-text */
import { Fragment } from "react";

import "../styles/Galeria.css";
import Gato1 from "../img/cat_1 1.png";
import Gato2 from "..//img/cat_2 1.png";
import Gato3 from "../img/cat_3 1.png";
import Cachorro1 from "../img/dog_1 1.png";
import Cachorro2 from "../img/dog_2 1.png";
import Cachorro3 from "../img/dog_3 1.png";
import DonateIcon from "../img/donate-icon.png";

function Galeria() {
  return (
    <Fragment>
      <section className="galeria">
        <h1 className="titulo-galeria">Pets para você adotar</h1>
        <h4>
          Adotar é um ato consciente e abandonar é crime. Não adote por impulso,
          adote por amor!
        </h4>

        <div className="pets">
          <div className="box-pets">
            <img clasName="img" src={Gato1} />
            <div className="box-text">
            <h3>
              Nome: Luna <br /> Sexo: Fêmea <br />
              Idade: 7 anos
            </h3>
            <img style={{ width: "40px", height: "40px" }} src={DonateIcon} />
            </div>
          </div>
          <div className="box-pets">
            <img clasName="img" src={Gato2} />
            <div className="box-text">
            <h3>
              Nome: Luna <br /> Sexo: Fêmea <br />
              Idade: 7 anos
            </h3>
            <img style={{ width: "40px", height: "40px" }} src={DonateIcon} />
            </div>
          </div>
          <div className="box-pets">
            <img clasName="img" src={Gato3} />
            <div className="box-text">
            <h3>
              Nome: Luna <br /> Sexo: Fêmea <br />
              Idade: 7 anos
            </h3>
            <img style={{ width: "40px", height: "40px" }} src={DonateIcon} />
            </div>
          </div>
          <div className="box-pets">
            <img clasName="img" src={Cachorro1} />
            <div className="box-text">
            <h3>
              Nome: Luna <br /> Sexo: Fêmea <br />
              Idade: 7 anos
            </h3>
            <img style={{ width: "40px", height: "40px" }} src={DonateIcon} />
            </div>
          </div>
          <div className="box-pets">
            <img clasName="img" src={Cachorro2} />
            <div className="box-text">
            <h3>
              Nome: Luna <br /> Sexo: Fêmea <br />
              Idade: 7 anos
            </h3>
            <img style={{ width: "40px", height: "40px" }} src={DonateIcon} />
            </div>
          </div>
          <div className="box-pets">
            <img clasName="img" src={Cachorro3} />
            <div className="box-text">
            <h3>
              Nome: Luna <br /> Sexo: Fêmea <br />
              Idade: 7 anos
            </h3>
            <img style={{ width: "40px", height: "40px" }} src={DonateIcon} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Galeria;
