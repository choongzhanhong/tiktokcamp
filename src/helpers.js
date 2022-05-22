export function checkWin(word, correctLetters, wrongLetters) {
    let status = 'win';
  
    // Check for win
    word.split('').forEach(letter => {
      if(!correctLetters.includes(letter)){
        status = '';
      }
    });
    
    // Check for lose
    if(wrongLetters.length === 6) status = 'lose';
  
    return status
  }