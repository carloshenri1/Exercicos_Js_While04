const exercicio01 = document.querySelector("#ex001")
const exercicio02 = document.querySelector("#ex002")
const exercicio03 = document.querySelector("#ex003")
const exercicio04 = document.querySelector("#ex004")
const exercicio05 = document.querySelector("#ex005")
const exercicio06 = document.querySelector("#ex006")
const exercicio07 = document.querySelector("#ex007")
const exercicio08 = document.querySelector("#ex008")
const exercicio09 = document.querySelector("#ex009")
const exercicio10 = document.querySelector("#ex010")
const exercicio11 = document.querySelector("#ex011")
const exercicio12 = document.querySelector("#ex012")
const exercicio13 = document.querySelector("#ex013")
const exercicio14 = document.querySelector("#ex014")
const exercicio15 = document.querySelector("#ex015")
const res = document.querySelector(".res")

function clearDiv() {
    res.innerHTML = ""
}

exercicio01.addEventListener("click", () => {
    /* Faça um programa que exiba os números de 1 a 10 usando o loop "do-while".*/
    clearDiv()
    let numero = 1;

    do {
        res.innerHTML += numero;
        numero++;
    } while (numero <= 10);
})


exercicio02.addEventListener("click", () => {
    /* Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "do-while". */
    clearDiv()
    let numero = 1;
    let soma = 0;

    do {
        soma += numero;
        numero++;
    } while (numero <= 100);

    res.innerHTML += "A soma dos números de 1 a 100 é: " + soma;
})


exercicio03.addEventListener("click", () => {
    /* Crie um programa que exiba os números pares de 1 a 50 usando o loop "do-while". */
    clearDiv()
    let numero = 1;

    do {
        if (numero % 2 === 0) {
            res.innerHTML += numero;
        }
        numero++;
    } while (numero <= 50);
})


exercicio04.addEventListener("click", () => {
    /** Faça um programa que leia 5 números inteiros usando o loop "do-while" e exiba a média aritmética dos valores lidos. */
    clearDiv()
    let contador = 1;
    let soma = 0;
    let numero;

    do {
        numero = parseInt(prompt(`Digite o ${contador}º número:`));
        soma += numero;
        contador++;
    } while (contador <= 5);

    let media = soma / 5;
    alert("A média dos números digitados é: " + media);
})


exercicio05.addEventListener("click", () => {
    /** Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "do-while". */
    clearDiv()
    let numero = parseInt(prompt("Digite um número inteiro para ver a tabuada:"));
    let contador = 1;

    do {
        res.innerHTML += `${numero} x ${contador} = ${numero * contador}<br>`;
        contador++;
    } while (contador <= 10);
})


exercicio06.addEventListener("click", () => {
    /** Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "do-while". */
    clearDiv()
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));
    let divisor = 1;

    if (numero > 0) {
        res.innerHTML = `Divisores de ${numero}:<br>`;

        do {
            if (numero % divisor === 0) {
                res.innerHTML += divisor + "<br>";
            }
            divisor++;
        } while (divisor <= numero);
    } else {
        res.innerHTML += "Por favor, digite um número inteiro positivo.";
    }
})


exercicio07.addEventListener("click", () => {
    /** Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "do-while". */
    clearDiv()
    let numero = parseInt(prompt("Digite um número inteiro:"));
    let divisor = 2;
    let primo = true;


    if (numero <= 1) {
        primo = false; // Números menores ou iguais a 1 não são primos
    } else {
        do {
            if (numero % divisor === 0) {
                primo = false;
            }
            divisor++;
        } while (divisor < numero && primo); // Continua até encontrar divisor ou chegar ao número
    }

    if (primo) {
        res.innerHTML += `${numero} é um número primo.`;
    } else {
        res.innerHTML += `${numero} não é um número primo.`;
    }
})


exercicio08.addEventListener("click", () => {
    /** Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "do-while". */
    clearDiv()
    let limite = parseInt(prompt("Digite um número inteiro para gerar a sequência de Fibonacci:"));

    let a = 0;
    let b = 1;

    res.innerHTML += "Sequência de Fibonacci até " + limite + ":<br>";

    do {
        res.innerHTML += a + "<br>";
        let proximo = a + b;
        a = b;
        b = proximo;
    } while (a <= limite);

})


exercicio09.addEventListener("click", () => {
    /** Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "do-while" e exiba a média das idades. */
    clearDiv()

    let contador = 1;
    let somaIdades = 0;

    do {
        let nome = prompt(`Digite o nome da ${contador}ª pessoa:`);
        let idade = parseInt(prompt(`Digite a idade de ${nome}:`));

        somaIdades += idade;
        contador++;
    } while (contador <= 5);

    let media = somaIdades / 5;
    res.innerHTML += `A média das idades das 5 pessoas é: ${media}`;
})


exercicio10.addEventListener("click", () => {
    /** Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "do-while". */
    clearDiv()

    let a = 0;
    let b = 1;
    let contador = 1; // Contador de números exibidos

    res.innerHTML += "Primeiros 20 números da sequência de Fibonacci:<br>";

    do {
        res.innerHTML += a + "<br>";
        let proximo = a + b;
        a = b;
        b = proximo;
        contador++;
    } while (contador <= 20);
})


exercicio11.addEventListener("click", () => {
    /** Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "do-while". */
    clearDiv()
    let numero = parseInt(prompt("Digite um número inteiro:"));

    let soma = 0;
    let i = 2;

    do {
        soma += i;
        i += 2;
    } while (i <= numero);

    res.innerHTML += "A soma de todos os números pares entre 1 e " + numero + " é: " + soma;
})


exercicio12.addEventListener("click", () => {
    /**  Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "do-while". */
    clearDiv()
    let i = 1;

    do {
        res.innerHTML += i;
        i += 2;
    } while (i <= 50);
})


exercicio13.addEventListener("click", () => {
    /** Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "do-while". */
    clearDiv()
    let numero = prompt("Digite um número inteiro:");

    let i = 0;

    while (i < numero.length) {
        res.innerHTML += "Dígito: " + numero[i]
        i++;
    }

})


exercicio14.addEventListener("click", () => {
    /** Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "do-while". */
    clearDiv()
    let numero = parseInt(prompt("Digite um número inteiro:"));
    let fatorial = 1;

    let i = 1;

    do {
        fatorial *= i;
        i++;
    } while (i <= numero);

    res.innerHTML += "O fatorial de " + numero + " é: " + fatorial;
})


exercicio15.addEventListener("click", () => {
    /** Crie um programa que leia o nome e a idade de várias pessoas usando o loop "do-while" até que o nome "fim" seja informado. Ao final, exiba a média das idades. */
    clearDiv()
    let somaIdades = 0;
    let quantidade = 0;   
    let nome;

    do {
        nome = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):");

        if (nome.toLowerCase() !== "fim") { 
            let idade = parseInt(prompt("Digite a idade de " + nome + ":"));

            if (!isNaN(idade) && idade >= 0) {
                somaIdades += idade;
                quantidade++;
            } else {
                alert("Idade inválida! Digite um número inteiro positivo.");
            }
        }
    } while (nome.toLowerCase() !== "fim");

    if (quantidade > 0) {
        let media = somaIdades / quantidade;
        res.innerHTML += "A média das idades é: " + media.toFixed(2);
    } else {
        res.innerHTML += "Nenhuma idade foi informada.";
    }
})