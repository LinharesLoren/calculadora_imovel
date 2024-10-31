function calcularImovel(metragem, metragemimovel, quartos) {
    let precoFinal;

    switch (quartos) {
        case 1:
            precoFinal = metragemimovel * metragem * 1;
            break;
        case 2:
            precoFinal = metragemimovel * metragem * 1.2;
            break;
        case 3:
            precoFinal = metragemimovel * metragem * 1.3;
            break;
        case 4:
            precoFinal = metragemimovel * metragem * 1.4;
            break;
        default:
            document.getElementById("resultado").innerHTML = "Não existente. O número de quartos deve ser abaixo de 4 (quatro)";
            return;
    }

    document.getElementById("resultado").innerHTML = `Preço final: R$ ${precoFinal.toFixed(2)}`;
}

document.getElementById("formImovel").addEventListener("submit", function (event) {
    event.preventDefault();
    let metragem = parseFloat(document.getElementById("metragem").value);
    let metragemlocal = parseFloat(document.getElementById("metragemimovel").value);
    let quartos = parseInt(document.getElementById("Número de quartos").value);
    calcularImovel(metragem, metragemlocal, quartos);
});
