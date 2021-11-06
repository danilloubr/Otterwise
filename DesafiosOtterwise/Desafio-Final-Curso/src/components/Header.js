import { Fragment } from "react";

import BannerCachorro from "../img/background.png"

import "../styles/Header.css"

function Header() {
  return (
    <Fragment>
      <section className="banner-cachorro">
        <div className="banner">
          <div className="imagem">
            <img
              src={BannerCachorro}
              alt="banner-cachorro"
            />
          </div>
          <div className="textos">
            <h1>Adote e salve uma vida</h1>
            <h2>Um gesto de carinho que pode salvar vidas.</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Header;
