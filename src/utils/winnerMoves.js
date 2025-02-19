export const checkWinner = (array) => {
        const moves = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < moves.length; i++) {
          const [a, b, c] = moves[i];
          if (array[a] && array[a] === array[b] && array[a] === array[c]) {
            return {gameEnded:true,winner:array[a]};
          }
        }
        return {gameEnded:false, winner:null};
}

export const checkDraw = (array) => {
    const newArray = array.filter(item => item !== null)
    if(newArray.length === array.length){
        return true
    }
    return false
}
