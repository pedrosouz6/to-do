const textDigitado = document.getElementById("textDigitado");
const ul = document.getElementById("lista");
const buttonPlus = document.getElementById("BtnAdd");
const msgerroP = document.querySelector(".msg--erro p");
const modal = document.querySelector(".tela--modal");
const excluirModal = document.querySelector("#excluir--modal");
const inputModal = document.querySelector("#input--modal");
const modalEnviar = document.getElementById("enviar--modal");

let tarefas = [];

//Numero aleatorio
const numAleatorio = ()=>{
    return Math.round(Math.random()*1000)
}

//Enter
textDigitado.addEventListener("keypress", (e) =>{
    //Validações
    if(e.keyCode === 13){
        if(textDigitado.value){
            msgerroP.style.display = 'none';
            const tarefasValores = {
                nome: textDigitado.value,
                id: numAleatorio()
            };

            tarefas.push(tarefasValores);
            
            inicia();

        } else if(textDigitado !== textDigitado.value){
            msgerroP.style.display = 'block';
        }
    };
});

//Click
buttonPlus.addEventListener("click", () =>{
    //Validações
    if(textDigitado.value){
        msgerroP.style.display = 'none';
        const tarefasValores = {
            nome: textDigitado.value,
            id: numAleatorio()
        };

        tarefas.push(tarefasValores);
        inicia();

    } else if (textDigitado !== textDigitado.value){
        msgerroP.style.display = 'block';
    };
});

//Criando os elementos e adicionando funcionalidades no span 
function addList(tarefas){
    textDigitado.value = "";
    textDigitado.focus();

    //Criando os elementos
    const li = document.createElement('li');
    li.innerHTML = tarefas.nome;
    li.id = tarefas.id;

    const span = document.createElement('span');
    span.innerHTML = `
    <i class="fas fa-check" id="certo" onclick="ToggleFeito(${tarefas.id})"></i> 
    <i class="fas fa-trash" id="lixeira" onclick="Remover(${tarefas.id})"></i>
    `;

    //Adicionando os elementos
    ul.append(li);
    li.append(span);
}

function inicia(){
    ul.innerHTML = "";
    tarefas.map(item => addList(item));
}

inicia();

//Tarefa concluida
function ToggleFeito(id){
    const tarefaFeita = document.getElementById(id);
    tarefaFeita.classList.toggle("feito");
}

//Remover o elemento
function Remover(id){
    tarefas = tarefas.filter(item => item.id !== id);
    inicia();
}

excluirModal.addEventListener('click', ()=>{
    modal.style.display = "none";  
})