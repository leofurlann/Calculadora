function calcular(operacao) {
    const primeiroNumero = document.querySelector("#primeiroNumero");
    const segundoNumero = document.querySelector("#segundoNumero");
    const resultado = document.querySelector("#resultado");

    if (primeiroNumero.value === "" || segundoNumero.value === "") {
        resultado.textContent = "Digite os dois números.";
        return;
    }

    const numero1 = Number(primeiroNumero.value);
    const numero2 = Number(segundoNumero.value);

    let calculo;

    if (operacao === "+") {
        calculo = numero1 + numero2;
    }

    else if (operacao === "-") {
        calculo = numero1 - numero2;
    }

    else if (operacao === "*") {
        calculo = numero1 * numero2;
    }

    else if (operacao === "/") {

        if (numero2 === 0) {
            resultado.textContent = "Não é possível dividir por zero.";
            return;
        }

        calculo = numero1 / numero2;
    }

    resultado.textContent = calculo;
}


function limpar() {
    const primeiroNumero = document.querySelector("#primeiroNumero");
    const segundoNumero = document.querySelector("#segundoNumero");
    const resultado = document.querySelector("#resultado");

    primeiroNumero.value = "";
    segundoNumero.value = "";
    resultado.textContent = "";
}

