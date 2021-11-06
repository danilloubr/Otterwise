import { editPet, getPetId } from "../services/postServices";

import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import { useHistory, useParams } from "react-router";

import { toast } from "react-toastify";

import "../styles/ModalEditPet.css";

function EditAdopted() {
  const [getPet, setGetPet] = useState([]);

  /*Modal no estado "true" para montar o componete na renderização da página */
  const [modalAdotarOpen, setModalAdotarOpen] = useState(true);

  /*Navegação via useHistory para quando dar o submit no formulário, navegar para (/login) e para se desejar
  cancelar a ação tambem ir para (/login) */
  const history = useHistory();

  //Função para voltar para (/login) via useHistory
  const goLogin = () => {
    history.push("/login");
  };

  /*usePamans para trazer via url o ID do campo do formulário que foi selecionado*/
  const { id } = useParams();

  /*Estilização do Modal*/
  const customStyles = {
    overlay: {
      position: "fixed",
      inset: "0px",
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      top: "",
      bottom: "500px",
      border: "100px",
      WebkitOverflowScrolling: "touch",
      borderRadius: "10px",
      boxShadow: " 3px 8px 17px -1px rgba(0,0,0,0.73)",
      animation: "slidedown 1s ease, go-back 1s infinite alternate",
      padding: "0px",
      backgroundColor: "transparent",
    },
  };

  function handleCloseModalAdotar() {
    setModalAdotarOpen(false);
  }

  /* Esse useEffects esta pegando o ID vindo via useParams, e com esse ID fazemos uma requisição via axios no modo getPetId pegando o PET 
  específico para edição */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: postsInfo } = await getPetId(id);
        const { pet } = postsInfo;

        
        setGetPet(pet);
      } catch {
        console.log("Deu erro macho.");
      }
    };

    fetchData();
  }, [id]);

  /* Com as informações editadas vamos chamar a função "handleEdit" para dar um PUT via axios e voltar para a rota (/login) com as 
  informações editadas */

  const handleAdopted = async (data) => {
    try {
      console.log("DATA AQUI 1:", data);
      const { data: resp } = await editPet(id, { ...getPet, adopted: true });
      console.log(resp);
      handleCloseModalAdotar();
      
      toast.success("Pet editada com sucesso!");
      history.push("/login");
    } catch (error) {
      
      toast.error("EITA, algo deu errado, por favor refeja os campos.");
    }

    
  };

  //Barreira se não existir formulário não renderiza nada
  if (!getPet) return null;

  //Console log KKKKK
  console.log("Pet Específico: esta Adotado?", getPet.adopted);

  return (
    <Fragment>
      <Modal
        isOpen={modalAdotarOpen}
        onRequestClose={() => goLogin()}
        style={customStyles}
      >
        <section className="container-delete">
          <div>
            <h2>O pet da lista foi adotado? {"<3"}</h2>
          </div>
          <div className="div-botao-deletar">
            <button onClick={() => handleAdopted()}>SIM</button>
            <button onClick={() => goLogin()}>NÃO</button>
          </div>
        </section>
      </Modal>
    </Fragment>
  );
}

export default EditAdopted;
