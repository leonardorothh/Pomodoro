let cronometro;
let minutos = 25;
let segundos = 0;
let emAndamento = false;

function iniciarCronometro() {
    if (!emAndamento) { // Verifica se o cronômetro já está em execução
        emAndamento = true;
        cronometro = setInterval(() => {
            if (minutos === 0 && segundos === 0) {
                clearInterval(cronometro);
                emAndamento = false; // Atualiza a flag ao finalizar o cronômetro
                alert("Tempo esgotado!");
            } else {
                if (segundos === 0) {
                    minutos--;
                    segundos = 59;
                } else {
                    segundos--;
                }

                atualizarCronometro();
            }
        }, 1000);
    }
}

function pausarCronometro() {
    clearInterval(cronometro);
    emAndamento = false; // Atualiza a flag ao pausar o cronômetro
}



function atualizarCronometro() {
    const minutosDisplay = minutos < 10 ? '0' + minutos : minutos;
    const segundosDisplay = segundos < 10 ? '0' + segundos : segundos;

    document.getElementById('minutos').innerText = minutosDisplay;
    document.getElementById('segundos').innerText = segundosDisplay;
}