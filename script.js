let playerOne = 'X'
let playerTwo = 'O'
let arr = {}


let displayBoard = () => {
    let cells = document.querySelectorAll('.box')
    let count = 1

    cells.forEach((cell) => {
        let handleClick = () => {
            if(count % 2 === 0){
                let even = {}
                cell.textContent = playerTwo
                let sub = {
                    [cell.id]: playerTwo
                }
                Object.assign(even, sub)
                Object.assign(arr, even)
                count++
            }
            else{
                cell.textContent = playerOne
                let odd = {}
                let sub = {
                    [cell.id]: playerOne
                }
                Object.assign(odd, sub)
                Object.assign(arr, odd)
                count++
            }
            console.log(arr)
            checkWinner(arr)    
            if(count === 10 && checkWinner(arr) !== true){
                alert('Its a draw')
            }
            cell.removeEventListener('click', handleClick)
        }
        cell.addEventListener('click', handleClick)
    })

    let reset = document.querySelector('.reset')
    reset.addEventListener('click', () => {
        location.reload()
    })
}
displayBoard()


let checkWinner = (arr) => {
    
    const winConditions = [    
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for(let i = 0; i < winConditions.length; i++){
        const [a, b, c] = winConditions[i]

        if(arr[a] === 'X' && arr[b] === 'X' && arr[c] === 'X') {
            alert('Victory: Player X');
            return true;
        }
          
        if(arr[a] === 'O' && arr[b] === 'O' && arr[c] === 'O') {
        alert('Victory: Player O');
        return true;
        }
          
    }
}
let submit = document.querySelector('#submit')
submit.addEventListener('click', (e) => {
    const pl1 = document.querySelector('#pl1').value
    const pl2 = document.querySelector('#pl2').value
    const names = document.querySelector('.names')
    while(names.firstChild){
        names.removeChild(names.lastChild)
    }
    if(pl1 === '' && pl2 === ''){
        names.textContent = 'Player 1(X): player1 and Player 2(O): player2';
    }
    else{
        names.textContent = `Player 1(X): ${pl1} and Player 2(O): ${pl2}`;
    }
})