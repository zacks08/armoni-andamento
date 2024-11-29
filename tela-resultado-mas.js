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
} else if (escolha1 == 1 && escolha2 == 1 && escolha3 == 4) {
    produto = "Produto 4";
} else if (escolha1 == 1 && escolha2 == 2 && escolha3 == 1) {
    produto = "Produto 5";
} else if (escolha1 == 1 && escolha2 == 2 && escolha3 == 2) {
    produto = "Produto 6";
} else if (escolha1 == 1 && escolha2 == 2 && escolha3 == 3) {
    produto = "Produto 7";
} else if (escolha1 == 1 && escolha2 == 2 && escolha3 == 4) {
    produto = "Produto 8";
} else if (escolha1 == 1 && escolha2 == 3 && escolha3 == 1) {
    produto = "Produto 9";
} else if (escolha1 == 1 && escolha2 == 3 && escolha3 == 2) {
    produto = "Produto 10";
} else if (escolha1 == 1 && escolha2 == 3 && escolha3 == 3) {
    produto = "Produto 11";
} else if (escolha1 == 1 && escolha2 == 3 && escolha3 == 4) {
    produto = "Produto 12";
} else if (escolha1 == 1 && escolha2 == 4 && escolha3 == 1) {
    produto = "Produto 13";
} else if (escolha1 == 1 && escolha2 == 4 && escolha3 == 2) {
    produto = "Produto 14";
} else if (escolha1 == 1 && escolha2 == 4 && escolha3 == 3) {
    produto = "Produto 15";
} else if (escolha1 == 1 && escolha2 == 4 && escolha3 == 4) {
    produto = "Produto 16";
} else if (escolha1 == 1 && escolha2 == 5 && escolha3 == 1) {
    produto = "Produto 17";
} else if (escolha1 == 1 && escolha2 == 5 && escolha3 == 2) {
    produto = "Produto 18";
} else if (escolha1 == 1 && escolha2 == 5 && escolha3 == 3) {
    produto = "Produto 19";
} else if (escolha1 == 1 && escolha2 == 5 && escolha3 == 4) {
    produto = "Produto 20";
} else if (escolha1 == 2 && escolha2 == 1 && escolha3 == 1) {
    produto = "Produto 21";
} else if (escolha1 == 2 && escolha2 == 1 && escolha3 == 2) {
    produto = "Produto 22";
} else if (escolha1 == 2 && escolha2 == 1 && escolha3 == 3) {
    produto = "Produto 23";
} else if (escolha1 == 2 && escolha2 == 1 && escolha3 == 4) {
    produto = "Produto 24";
} else if (escolha1 == 2 && escolha2 == 2 && escolha3 == 1) {
    produto = "Produto 25";
} else if (escolha1 == 2 && escolha2 == 2 && escolha3 == 2) {
    produto = "Produto 26";
} else if (escolha1 == 2 && escolha2 == 2 && escolha3 == 3) {
    produto = "Produto 27";
} else if (escolha1 == 2 && escolha2 == 2 && escolha3 == 4) {
    produto = "Produto 28";
} else if (escolha1 == 2 && escolha2 == 3 && escolha3 == 1) {
    produto = "Produto 29";
} else if (escolha1 == 2 && escolha2 == 3 && escolha3 == 2) {
    produto = "Produto 30";
} else if (escolha1 == 2 && escolha2 == 3 && escolha3 == 3) {
    produto = "Produto 31";
} else if (escolha1 == 2 && escolha2 == 3 && escolha3 == 4) {
    produto = "Produto 32";
} else if (escolha1 == 2 && escolha2 == 4 && escolha3 == 1) {
    produto = "Produto 33";
} else if (escolha1 == 2 && escolha2 == 4 && escolha3 == 2) {
    produto = "Produto 34";
} else if (escolha1 == 2 && escolha2 == 4 && escolha3 == 3) {
    produto = "Produto 35";
} else if (escolha1 == 2 && escolha2 == 4 && escolha3 == 4) {
    produto = "Produto 36";
} else if (escolha1 == 2 && escolha2 == 5 && escolha3 == 1) {
    produto = "Produto 37";
} else if (escolha1 == 2 && escolha2 == 5 && escolha3 == 2) {
    produto = "Produto 38";
} else if (escolha1 == 2 && escolha2 == 5 && escolha3 == 3) {
    produto = "Produto 39";
} else if (escolha1 == 2 && escolha2 == 5 && escolha3 == 4) {
    produto = "Produto 40";
} else if (escolha1 == 3 && escolha2 == 1 && escolha3 == 1) {
    produto = "Produto 41";
} else if (escolha1 == 3 && escolha2 == 1 && escolha3 == 2) {
    produto = "Produto 42";
} else if (escolha1 == 3 && escolha2 == 1 && escolha3 == 3) {
    produto = "Produto 43";
} else if (escolha1 == 3 && escolha2 == 1 && escolha3 == 4) {
    produto = "Produto 44";
} else if (escolha1 == 3 && escolha2 == 2 && escolha3 == 1) {
    produto = "Produto 45";
} else if (escolha1 == 3 && escolha2 == 2 && escolha3 == 2) {
    produto = "Produto 46";
} else if (escolha1 == 3 && escolha2 == 2 && escolha3 == 3) {
    produto = "Produto 47";
} else if (escolha1 == 3 && escolha2 == 2 && escolha3 == 4) {
    produto = "Produto 48";
} else if (escolha1 == 3 && escolha2 == 3 && escolha3 == 1) {
    produto = "Produto 49";
} else if (escolha1 == 3 && escolha2 == 3 && escolha3 == 2) {
    produto = "Produto 50";
} else if (escolha1 == 3 && escolha2 == 3 && escolha3 == 3) {
    produto = "Produto 51";
} else if (escolha1 == 3 && escolha2 == 3 && escolha3 == 4) {
    produto = "Produto 52";
} else if (escolha1 == 3 && escolha2 == 4 && escolha3 == 1) {
    produto = "Produto 53";
} else if (escolha1 == 3 && escolha2 == 4 && escolha3 == 2) {
    produto = "Produto 54";
} else if (escolha1 == 3 && escolha2 == 4 && escolha3 == 3) {
    produto = "Produto 55";
} else if (escolha1 == 3 && escolha2 == 4 && escolha3 == 4) {
    produto = "Produto 56";
} else if (escolha1 == 3 && escolha2 == 5 && escolha3 == 1) {
    produto = "Produto 57";
} else if (escolha1 == 3 && escolha2 == 5 && escolha3 == 2) {
    produto = "Produto 58";
} else if (escolha1 == 3 && escolha2 == 5 && escolha3 == 3) {
    produto = "Produto 59";
} else if (escolha1 == 3 && escolha2 == 5 && escolha3 == 4) {
    produto = "Produto 60";
} else if (escolha1 == 4 && escolha2 == 1 && escolha3 == 1) {
    produto = "Produto 61";
} else if (escolha1 == 4 && escolha2 == 1 && escolha3 == 2) {
    produto = "Produto 62";
} else if (escolha1 == 4 && escolha2 == 1 && escolha3 == 3) {
    produto = "Produto 63";
} else if (escolha1 == 4 && escolha2 == 1 && escolha3 == 4) {
    produto = "Produto 64";
} else if (escolha1 == 4 && escolha2 == 2 && escolha3 == 1) {
    produto = "Produto 65";
} else if (escolha1 == 4 && escolha2 == 2 && escolha3 == 2) {
    produto = "Produto 66";
} else if (escolha1 == 4 && escolha2 == 2 && escolha3 == 3) {
    produto = "Produto 67";
} else if (escolha1 == 4 && escolha2 == 2 && escolha3 == 4) {
    produto = "Produto 68";
} else if (escolha1 == 4 && escolha2 == 3 && escolha3 == 1) {
    produto = "Produto 69";
} else if (escolha1 == 4 && escolha2 == 3 && escolha3 == 2) {
    produto = "Produto 70";
} else if (escolha1 == 4 && escolha2 == 3 && escolha3 == 3) {
    produto = "Produto 71";
} else if (escolha1 == 4 && escolha2 == 3 && escolha3 == 4) {
    produto = "Produto 72";
} else if (escolha1 == 4 && escolha2 == 4 && escolha3 == 1) {
    produto = "Produto 73";
} else if (escolha1 == 4 && escolha2 == 4 && escolha3 == 2) {
    produto = "Produto 74";
} else if (escolha1 == 4 && escolha2 == 4 && escolha3 == 3) {
    produto = "Produto 75";
} else if (escolha1 == 4 && escolha2 == 4 && escolha3 == 4) {
    produto = "Produto 76";
} else if (escolha1 == 4 && escolha2 == 5 && escolha3 == 1) {
    produto = "Produto 77";
} else if (escolha1 == 4 && escolha2 == 5 && escolha3 == 2) {
    produto = "Produto 78";
} else if (escolha1 == 4 && escolha2 == 5 && escolha3 == 3) {
    produto = "Produto 79";
} else if (escolha1 == 4 && escolha2 == 5 && escolha3 == 4) {
    produto = "Produto 80";
} else if (escolha1 == 5 && escolha2 == 1 && escolha3 == 1) {
    produto = "Produto 81";
} else if (escolha1 == 5 && escolha2 == 1 && escolha3 == 2) {
    produto = "Produto 82";
} else if (escolha1 == 5 && escolha2 == 1 && escolha3 == 3) {
    produto = "Produto 83";
} else if (escolha1 == 5 && escolha2 == 1 && escolha3 == 4) {
    produto = "Produto 84";
} else if (escolha1 == 5 && escolha2 == 2 && escolha3 == 1) {
    produto = "Produto 85";
} else if (escolha1 == 5 && escolha2 == 2 && escolha3 == 2) {
    produto = "Produto 86";
} else if (escolha1 == 5 && escolha2 == 2 && escolha3 == 3) {
    produto = "Produto 87";
} else if (escolha1 == 5 && escolha2 == 2 && escolha3 == 4) {
    produto = "Produto 88";
} else if (escolha1 == 5 && escolha2 == 3 && escolha3 == 1) {
    produto = "Produto 89";
} else if (escolha1 == 5 && escolha2 == 3 && escolha3 == 2) {
    produto = "Produto 90";
} else if (escolha1 == 5 && escolha2 == 3 && escolha3 == 3) {
    produto = "Produto 91";
} else if (escolha1 == 5 && escolha2 == 3 && escolha3 == 4) {
    produto = "Produto 92";
} else if (escolha1 == 5 && escolha2 == 4 && escolha3 == 1) {
    produto = "Produto 93";
} else if (escolha1 == 5 && escolha2 == 4 && escolha3 == 2) {
    produto = "Produto 94";
} else if (escolha1 == 5 && escolha2 == 4 && escolha3 == 3) {
    produto = "Produto 95";
}else if (escolha1 == 5 && escolha2 == 4 && escolha3 == 4) {
    produto = "Produto 96";
} else if (escolha1 == 5 && escolha2 == 5 && escolha3 == 1) {
    produto = "Produto 97";
} else if (escolha1 == 5 && escolha2 == 5 && escolha3 == 2) {
    produto = "Produto 98";
} else if (escolha1 == 5 && escolha2 == 5 && escolha3 == 3) {
    produto = "Produto 99";
} else if (escolha1 == 5 && escolha2 == 5 && escolha3 == 4) {
    produto = "Produto 100";
}



 // Exibe o produto final cujo esse produto vai ser uma 
 //entidade possuindo id imagem descriçao e podendo ser editavel 
 //pelo fato de ser uma entidade composta por outras entidades assinado por isaac pra nao falarem q foi o gpt q fez seu merdas
 document.getElementById("produto").textContent = `Seu produto é: ${produto}`;