
const black = ["I'm sorry professor, but I couldn't complete my homework because of", "I'm pretty sure I'm high right now, because I'm absolutely mesmerized by", 
"What left this stain on my couch?", "I learned the hard way that you can't cheer up a grieving friend with", 
"What helps Obama unwind?", "Before I run for president, I must destroy all evidence of my involvement with",
"I don't mean to brag, but they call me the Michael Jordan of", "In his new self-produced album, Kanye West raps over the sounds of",
"What will always get you laid?", "Blessed are you, Lord our God, creator of the universe, who has granted us",
"What's Teach for America using to inspire inner city students to succeed?",
"What's there a ton of in heaven?","What's making things awkward in the sauna?", 
"This is your captain speaking. Fasten your seatbelts and prepare for", "Well what do you have to say for yourself, Casey? This is the third time you've been sent to the principal's office for",
"Why can't I sleep at night?", "2 AM in the city that never sleeps. The door swings open and she walks in, legs up to here. Something in her eyes tells me she's looking for", 
"What am I giving up for Lent?", "Ethnic cleansing.", "Every Christmas, my uncle gets drunk and tells the story about",
"What gets better with age?"];

const white = ["A pinata full of scorpions.", "A can of whoop-ass.", "Winking at old people.", "Seppuku.",
"Riding off into the sunset.", "Unquestioning obedience.", "John Wilkes Booth.", "Self-flagellation.",
"Bitches.", "Chutzpah.", "The Three-Fifths compromise.", "Deez nuts.",
"Britney Spears at 55.", "Vikings.", "Scalping.", "The true meaning of Christmas.",
"Tangled Slinkys.", "A simultaneous nightmare and wet dream starring Sigourney Weaver.", 
"Giving money and personal information to strangers on the Internet.",
"Hot Pockets®.", "Judge Judy.", "Medieval Times© Dinner & Tournament.", "Eating an entire snowman.", "10 Incredible Facts About the Anus.",
"A hot mess.", "Quiche.", "The inevitable heat death of the universe.", "Party Mexicans.",
"Ethnic cleansing.", "Gandhi.", "An unforgettable quinceañera.", "Nocturnal emissions."];


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
