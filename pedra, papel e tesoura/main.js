function userChoice(choice) {
    var choices = ['pedra', 'papel', 'tesoura'];
    var randomIndex = Math.floor(Math.random() * 3);
    var computerChoice = choices[randomIndex];

    var result = getResult(choice, computerChoice);

    document.getElementById('result').innerHTML = `Você escolheu ${choice}. O computador escolheu ${computerChoice}. Resultado: ${result}`;
}

function getResult(user, computer) {
    if (user === computer) {
        return 'Empate!';
    } else if ((user === 'pedra' && computer === 'tesoura') ||
               (user === 'papel' && computer === 'pedra') ||
               (user === 'tesoura' && computer === 'papel')) {
        return 'Você ganhou!';
    } else {
        return 'Você perdeu!';
    }
}
