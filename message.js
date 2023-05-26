function retrieveVerb(arr){
    let dict = ["plants", "eats", "sniffs", "smacks", "sneezes"];
    return dict[arr[0]];
}

function retrieveNoun(arr){
    let dict = ["car", "house", "flower", "airplane", "school"];
    return dict[arr[1]];
}

function retrieveAdjective(arr){
    let dict = ["red", "smelly", "dirty", "old", "shiny"];
    return dict[arr[2]];
}

function madLib() {
    let randWord = [];
    let verbs = [];
    let nouns = [];
    let adjective = [];

    for (var i=0; i < 3; i++){
        randWord.push(Math.floor(Math.random()*5));
    }

    console.log("The cow " +retrieveVerb(randWord)+ " a "+ retrieveAdjective(randWord)+" "+ retrieveNoun(randWord)+".");
}

madLib();