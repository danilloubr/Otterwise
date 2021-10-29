import { Fragment } from "react";

import "../styles/Header.css"
import BannerCachorro from "../img/background.png"

function Header() {
  return (
    <Fragment>
      <section class="banner-cachorro">
        <div class="banner">
          <div id="imagem">
            <img
              src={BannerCachorro}
              alt="banner-cachorro"
            />
          </div>
          <div id="textos">
            <h1>Adote e salve uma vida</h1>
            <h2>Um gesto de carinho que pode salvar vidas.</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Header;
