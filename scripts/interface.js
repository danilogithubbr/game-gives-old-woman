    // criada para que sejamos capases de reagir aos clicks dos jogadores

    // garantindo que o html foi carregado (sera executado quando o documento for carregado)
    document.addEventListener('DOMContentLoaded',()=>{
        //

        // função que pega todos elementos/squares (cada quadradinho)
        let squares = document.querySelectorAll(".square");

        // saber qual elemento foi clickdo
        squares.forEach((square) =>{
            square.addEventListener('click', handleClick);
        })
    })

    function handleClick(event){
        //console.log(event.target); //demonstra qual elemento foi clickdo
        console.log('jogador: ' + playerTime);
        let square = event.target;
        let position = square.id; // id do elemento clickdo
        if(handleMove(position)){
            setTimeout(()=>{alert("Game Over: O jogador " + playerTime + " foi o vencedor.")},10);
        }
        updateSquare(position);
    }

    function updateSquare(position){
        // função que pega o elemento id da squere
        let square = document.getElementById(position.toString());
        let symbol = board[position];
        square.innerHTML = `<div class='${symbol}'></div>`

    }

    
