function retrieveVerb(arr){
    let dict = ["verb0", "verb1", "verb2", "verb3", "verb4"];
    return dict[arr[0]];
}

function retrieveNoun(arr){
    let dict = ["noun0", "noun1", "noun2", "noun3", "noun4"];
    return dict[arr[1]];
}

function retrieveAdjective(arr){
    let dict = ["adj0", "adj1", "adj2", "adj3", "adj4"];
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