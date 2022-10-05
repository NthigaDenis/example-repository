// Code your solutions in this file
function writeCards(names, event) {

    // 

    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;


        messages.push(message);
    }
    return message;
    console.log(writeCards(['tugi', 'kero', 'makena'], 'birthday'));


}