
// iniciar as variaveis
let board = ['','','','','','','','','']; // posições
let playerTime = 0; // 0 para jogador 1 e 1 para jogador 2
let gamOver = false;
let symbols = ['o','x']; 
// define as posições vencedoras, se no bord elas forem iguais tem vencedor
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// função para incluir o icone no board de acordo com click
function handleMove(position){

    if(gamOver){
        return; // se o gameOver for verdadeiro não aceita mais fazer lançe
    }

    // garantir que o border esta vazio
    if(board[position] == ''){
        board[position] = symbols[playerTime]; // primeiro jogador é o bolinha

        gamOver = isWin();
        // so passa para o outro jogador se o gameOver for falso
        if(gamOver == false){
            // passar a ves para o proximo jogador
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }

    return gamOver;
}


function isWin(){
    // percorrer a lista
    for(let i=0; i<winStates.length; i++){
        let seq = winStates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        if(board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ''){
                return true;
            }
    }

    return false;
}



