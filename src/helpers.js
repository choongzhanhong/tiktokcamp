export function checkWin(word, correctLetters, wrongLetters) {
    if (word !== '') {
      let status = 'win';
      word.split('').forEach(letter => {
        if(!correctLetters.includes(letter)){
          status = '';
        }
      });
      
      if(wrongLetters.length === 6) {
          status = 'lose';
      }
      return status
    }
    return ''  
  }