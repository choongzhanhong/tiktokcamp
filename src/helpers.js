export function pressLetter(letter, isCorrect) {
    console.log(letter);
    let letterKeyEl = document.getElementById("letter_"+letter);
    if (isCorrect) {
        letterKeyEl.classList.add("letterKey_down_correct", "scale-down-center");
    } else {
        letterKeyEl.classList.add("letterKey_down_wrong", "scale-down-center");
    }
}