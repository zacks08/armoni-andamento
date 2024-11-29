function escolher(opcao) {
    // Armazena a escolha no localStorage
    localStorage.setItem("escolhaGenero", opcao);

    // Redireciona com base na escolha
    if (opcao === "masculino") {
        window.location.href = "/telas/telas/tela1-mas.html"; // Caminho para a tela masculina
    } else if (opcao === "feminino") {
        window.location.href = "/telas/telas/tela1-fem.html"; // Caminho para a tela feminina
    }
}
