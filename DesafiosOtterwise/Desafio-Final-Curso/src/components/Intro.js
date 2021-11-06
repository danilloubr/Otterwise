import { Fragment } from "react";
import "../styles/Intro.css";

function Intro() {
  return (
    <Fragment>
      <section className="intro">
        <div className="paragrafo1">
          <h3>Por que adotar?</h3>
          <h4>Adoção salva a vida de um animal</h4>
          <br></br>
          <h4>
            Adotar um animal é uma grande responsabilidade, e não é só porque
            você precisará cuidar dele em casa. A adoção é capaz de salvar a
            vida de um bichinho que poderia estar nas ruas, abandonado, morrendo
            de fome e possivelmente sofrendo de maus tratos. A maioria das ONGs
            e clínicas veterinárias não podem sustentar um animal por muito
            tempo, não tendo condições de manter a quantidade de cães e gatos
            desabrigados que frequentemente recebem. Além de levar um novo
            companheiro para a casa, você está salvando a vida de um grande
            amigo e dando a ele a oportunidade de receber amor em um lar seguro.
          </h4>
          <h5>Fonte: https://www.casapraticaqualita.com.br/</h5>
        </div>
        <div className="paragrafo2">
          <h3>3 Motivos para adotar</h3>
          <h4 className="titulo">1 - Não vai faltar amor </h4>
          
          <h4>
            Acredite: adotar um animalzinho muda completamente a vida de alguém.
            E o amor que eles nos dão é tão grande que fica até difícil
            retribuir à altura!
            
          </h4>
          <br></br>
          <h4 className="titulo">2 - Diminui o estresse </h4>
          <h4>
            Você sabia que adotar um animalzinho ajuda a diminuir o estresse?
            Sim! Até nisso eles contribuem.
          </h4>
          <br></br>
          <h4 className="titulo">3 - A melhor companhia</h4>
          <h4>
            Adotar um cachorro vai deixá-lo eternamente grato a você. Você vai
            ter a melhor companhia que poderia querer em todos os momentos!
          </h4>
        </div>
      </section>
    </Fragment>
  );
}

export default Intro;


