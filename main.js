
const black = [1, 2, 3, 4, 5, 6];
const white = ['a', 'b', 'c', 'd', 'e', 'f'];


//Genererar random mening
const randomSentence = {
    //Genererar ett svart kort
generateRandomBlack (arrayBlack) {
    const randomNum = Math.floor(Math.random()*(arrayBlack.length));
    const blackWord = arrayBlack[randomNum];
    return blackWord;
},
//Genererar ett random vitt kort
 generateRandomWhite (arrayWhite) {
    const randomNum = Math.floor(Math.random()*(arrayWhite.length));
    const whiteWord = arrayWhite[randomNum];
    return whiteWord;
},
    //Sätter ihop de två korten
generateRandomSentence (){
    const sentence = this.generateRandomBlack(black) + ' ' + this.generateRandomWhite(white);
    return console.log(sentence);
}
}

randomSentence.generateRandomSentence();
