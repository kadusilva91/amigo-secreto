//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema
let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector("#amigo");
    let nome = input.value.trim();

    if (nome ==="") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
    console.log("Lista de amigos: ", amigos);
}

function atualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.querySelector("#resultado").innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}