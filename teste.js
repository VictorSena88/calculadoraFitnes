function calorias() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let idade = document.getElementById("idade").value;
    let sexo = document.getElementById("sexo").value;
    let nivel = document.getElementById("nivel").value;
    let resultado = document.getElementById("resultado");

    if (sexo === "masculino") {
        let tmb = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
        let caloriasNecessarias = tmb * nivel;
        resultado.innerHTML = `Você precisa de ${caloriasNecessarias.toFixed(2)} calorias por dia.`;
    } else if (sexo === "feminino") {
        let tmb = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
        let caloriasNecessarias = tmb * nivel;
        resultado.innerHTML = `Você precisa de ${caloriasNecessarias.toFixed(2)} calorias por dia.`;
    } else {
        resultado.innerHTML = "Por favor, selecione um sexo válido.";
    }
}
document.getEleme

function agua() {
    let peso = document.getElementById("peso").value;
    let resultadoAgua = document.getElementById("resultadoAgua");

    let aguaNecessaria = peso * 35; // 35 ml por kg de peso
    resultadoAgua.innerHTML = `Você precisa de ${aguaNecessaria} ml de água por dia.`;
}

document.getElementById("calcular").addEventListener("click", function (event) {
    event.preventDefault();
    calorias();
    agua();
});
