const btnAbrir = document.querySelector("#botao-abrir");
const btnFechar = document.querySelector("#botao-fechar");
const menuResponsivo = document.querySelector("#menu-responsivo");
const textos = document.querySelector("#textos");

function abreMenu() {
  menuResponsivo.style.display = "flex";
  textos.style.display = "none";
  btnAbrir.style.display = "none";
  btnFechar.style.display = "flex";
  btnFechar.style.zIndex = "1";
}

function fecharMenu() {
    menuResponsivo.style.display = "none";
    textos.style.display = "flex";
    textos.style.flexDirection = "column"
    btnAbrir.style.display = "flex";
    btnFechar.style.display = "none";
    btnFechar.style.zIndex = "-1";
  }

btnAbrir.addEventListener("click", abreMenu);
btnFechar.addEventListener("click", fecharMenu)


const form = document.getElementById("caixa")

form.addEventListener("submit", function(e){
    e.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const mensagem = document.getElementById("mensagem").value

    fetch("https://otterwise-fake-api.herokuapp.com/contact",{
        method: "POST",
        body: JSON.stringify({
            "name": nome,
            "email": email,
            "phone": telefone,
            "message": mensagem
 
        }),
        headers: {"Content-type": "application/json"}
    }).then(function(response){
    
        return response.json()
    }).then(function(data){
        console.log(data)
        
        
        const resultado = document.getElementById("resultado")
        resultado.innerHTML = `Obrigado ${data.response.name}, 
        entraremos em contato em breve.` 
    
        document.forms.caixa.reset()
        
    }).catch(function(error){
        console.error(error)
    })


})
