function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowercase();
}
function whisper(aWord) {
    return aWord.toLowerCase();
}

function logShout(aWord) {
    console.log(aWord.toUpperCase());
}

function logWhisper(aWord) {
    console.log(aWord.toLowerCase());
}


function sayHiToHeadphonedRoommate(aWord) {
    var cantUnswer = "I can\'t hear you!";
    var yesUnswer = "YES INDEED!";
    var lovUnswer = "I would love to!";
    if (aWord.toLowerCase(aWord) === aWord) {
        return cantUnswer;
    }
    else if (aWord.toUpperCase(aWord) === aWord) {
        return yesUnswer;
    }
    else if ("Let's have dinner together!" === aWord) {
        return lovUnswer
    }
}