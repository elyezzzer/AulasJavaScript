//Seletor de elemento por ID
function puxarElementoPorId(){
    const titulo = document.getElementById('meuTitulo');
    titulo.textContent = "Titulo Alterado";
}

function puxarElementoPorClasse(){
    const subtitulo = document.getElementsByClassName('subtitulo');
    console.log(subtitulo);
}

function puxarElementoPorTag(){
    const paragrafos = document.getElementsByTagName('p');
    console.log(paragrafos);
}

//funcao para criar a lista
function criarLista(){
    const container = document.getElementById('lista-container');
    container.innerHTML =
    `
     <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    `;
}

function removerLista(){
    const container = document.getElementById('lista-container');
    container.innerHTML = '';
}