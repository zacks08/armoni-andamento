function escolher(opcao) {
    localStorage.setItem("escolha3", opcao); // Armazena a escolha
    window.location.href = "tela-resultado.html"; // Vai para o resultado
}
 // Recupera as escolhas feitas
 const escolha1 = localStorage.getItem("escolha1");
 const escolha2 = localStorage.getItem("escolha2");
 const escolha3 = localStorage.getItem("escolha3");

 console.log("Escolha 1:", escolha1);
 console.log("Escolha 2:", escolha2);
 console.log("Escolha 3:", escolha3);    

 // Determina o produto final com base nas escolhas
 if (escolha1 == 1 && escolha2 == 1 && escolha3 == 1) {
    produto = "Produto 1";
} else if (escolha1 == 1 && escolha2 == 1 && escolha3 == 2) {
    produto = "Produto 2";
} else if (escolha1 == 1 && escolha2 == 1 && escolha3 == 3) {
    produto = "Produto 3";
} else if (escolha1 == 1 && escolha2 == 2 && escolha3 == 1) {
    produto = "Produto 4";
} else if (escolha1 == 1 && escolha2 == 2 && escolha3 == 2) {
    produto = "Produto 5";
} else if (escolha1 == 1 && escolha2 == 2 && escolha3 == 3) {
    produto = "Produto 6";
} else if (escolha1 == 1 && escolha2 == 3 && escolha3 == 1) {
    produto = "Produto 7";
} else if (escolha1 == 1 && escolha2 == 3 && escolha3 == 2) {
    produto = "Produto 8";
} else if (escolha1 == 1 && escolha2 == 3 && escolha3 == 3) {
    produto = "Produto 9";
} else if (escolha1 == 2 && escolha2 == 1 && escolha3 == 1) {
    produto = "Produto 10";
} else if (escolha1 == 2 && escolha2 == 1 && escolha3 == 2) {
    produto = "Produto 11";
} else if (escolha1 == 2 && escolha2 == 1 && escolha3 == 3) {
    produto = "Produto 12";
} else if (escolha1 == 2 && escolha2 == 2 && escolha3 == 1) {
    produto = "Produto 13";
} else if (escolha1 == 2 && escolha2 == 2 && escolha3 == 2) {
    produto = "Produto 14";
} else if (escolha1 == 2 && escolha2 == 2 && escolha3 == 3) {
    produto = "Produto 15";
} else if (escolha1 == 2 && escolha2 == 3 && escolha3 == 1) {
    produto = "Produto 16";
} else if (escolha1 == 2 && escolha2 == 3 && escolha3 == 2) {
    produto = "Produto 17";
} else if (escolha1 == 2 && escolha2 == 3 && escolha3 == 3) {
    produto = "Produto 18";
} else if (escolha1 == 3 && escolha2 == 1 && escolha3 == 1) {
    produto = "Produto 19";
} else if (escolha1 == 3 && escolha2 == 1 && escolha3 == 2) {
    produto = "Produto 20";
} else if (escolha1 == 3 && escolha2 == 1 && escolha3 == 3) {
    produto = "Produto 21";
} else if (escolha1 == 3 && escolha2 == 2 && escolha3 == 1) {
    produto = "Produto 22";
} else if (escolha1 == 3 && escolha2 == 2 && escolha3 == 2) {
    produto = "Produto 23";
} else if (escolha1 == 3 && escolha2 == 2 && escolha3 == 3) {
    produto = "Produto 24";
} else if (escolha1 == 3 && escolha2 == 3 && escolha3 == 1) {
    produto = "Produto 25";
} else if (escolha1 == 3 && escolha2 == 3 && escolha3 == 2) {
    produto = "Produto 26";
} else if (escolha1 == 3 && escolha2 == 3 && escolha3 == 3) {
    produto = "Produto 27";
}

 // Exibe o produto final cujo esse produto vai ser uma 
 //entidade possuindo id imagem descriçao e podendo ser editavel 
 //pelo fato de ser uma entidade composta por outras entidades assinado por isaac pra nao falarem q foi o gpt q fez seu merdas
 document.getElementById("produto").textContent = `Seu produto é: ${produto}`;