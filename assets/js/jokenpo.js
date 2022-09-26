const cpu = ['pedra', 'papel', 'tesoura'];
const randCpu = cpu[Math.floor(Math.random() * cpu.length)];
const pedra = document.querySelector('#ja');
const papel = document.querySelector('#ken');
const tesoura = document.querySelector('#gu');
const labelP = document.querySelector('#label-p');
const cpuPlayed = document.querySelector('.cpu-played');
const result = document.querySelector('.result');
const playAgain = document.querySelector('.btn-playAgain');
const btnIniciar = document.querySelector('.btn-iniciar');
const gameDisplay = document.querySelector('.game');
const container = document.querySelector('.container');


function  displayAltera() {
    gameDisplay.style.display = 'block';
};

btnIniciar.addEventListener('click', (e) => {
    e.preventDefault();
    container.style.display = 'none';
    displayAltera();
});

pedra.addEventListener('click', (e) => {
    e.preventDefault();
    papel.style.display = 'none';
    tesoura.style.display = 'none';
    pedra.style.display = 'none';
    labelP.innerText = 'Você escolheu PEDRA';
    pedraCheck();
});

papel.addEventListener('click', (e) => {
    e.preventDefault();
    pedra.style.display = 'none';
    papel.style.display = 'none';
    tesoura.style.display = 'none';
    labelP.innerText = 'Você escolheu PAPEL';
    papelCheck();
});

tesoura.addEventListener('click', (e) => {
    e.preventDefault();
    pedra.style.display = 'none';
    papel.style.display = 'none';
    tesoura.style.display = 'none';
    labelP.innerText = 'Você escolheu TESOURA';
    tesouraCheck();
});

function pedraCheck() {
    cpuPlayed.innerHTML = "CPU está jogando aguarde...";
    
    setTimeout(() => {
        if(randCpu == 'pedra') {
            cpuPlayed.innerHTML = 'CPU JOGOU PEDRA';
            result.innerHTML = 'EMPATE';
        } else if(randCpu == 'tesoura') {
            cpuPlayed.innerHTML = 'CPU JOGOU TESOURA';
            result.innerHTML = 'VOCÊ VENCEU';
        } else {
            cpuPlayed.innerHTML = 'CPU JOGOU PAPEL';
            result.innerHTML = 'VOCÊ PERDEU';
        }
    }, 5000);

    setTimeout(() => {
        newGame();
    }, 6000);
};

function tesouraCheck() {
    cpuPlayed.innerHTML = "CPU está jogando aguarde...";
    setTimeout(() => {
        if(randCpu == 'pedra') {
            cpuPlayed.innerHTML = 'CPU JOGOU PEDRA';
            result.innerHTML = 'VOCÊ PERDEU';
        } else if(randCpu == 'tesoura') {
            cpuPlayed.innerHTML = 'CPU JOGOU TESOURA';
            result.innerHTML = 'EMPATE';
        } else {
            cpuPlayed.innerHTML = 'CPU JOGOU PAPEL';
            result.innerHTML = 'VOCÊ VENCEU';
        }
    }, 5000);

    setTimeout(() => {
        newGame();
    }, 6000);

};

function papelCheck() {
    cpuPlayed.innerHTML = "CPU está jogando aguarde...";

    setTimeout(() => {
        if(randCpu == 'pedra') {
            cpuPlayed.innerHTML = 'CPU JOGOU PEDRA';
            result.innerHTML = 'VOCÊ VENCEU';
        } else if(randCpu == 'tesoura') {
            cpuPlayed.innerHTML = 'CPU JOGOU TESOURA';
            result.innerHTML = 'VOCÊ PERDEU';
        } else {
            cpuPlayed.innerHTML = 'CPU JOGOU PAPEL';
            result.innerHTML = 'EMPATE';
        }
    }, 5000);

    setTimeout(() => {
        newGame();
    }, 6000);
};

function newGame() {
    playAgain.style.display = 'block';
};


playAgain.addEventListener('click', () => {
    window.location.reload();
});
