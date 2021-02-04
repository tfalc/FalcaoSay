let order = [];
let clickedOrder = [];
let score = 0;

/* 
0 = VERDE
1 = VERMELHO
2 = AMARELO
3 = AZUL
*/

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Criar ordem aleatória das cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Ressalta a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 400);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

//Checagem de botões clicados, se são os mesmos
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando o próximo nível!`);
        nextLevel();
    }
}

//Reconhecer o click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//Função para retornar a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//Função para o próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função Game Over
let gameOver = () => {
    alert(`Pontuação: ${score}\n Você perdeu... T_T`)
    order = [];
    clickedOrder = [];
    
    playGame();
}

//Função para começar o jogoo
let playGame = () => {
    alert(`Iniciar o jogo?\nClique em OK para iniciar!`)
    score = 0;
    nextLevel();
}

//Reconhecimento dos cliques
green.onClick = () => click(0);
red.onClick = () => click(1);
yellow.onClick = () => click(2);
blue.onClick = () => click(3);

//Iniciar o jogo
playGame();