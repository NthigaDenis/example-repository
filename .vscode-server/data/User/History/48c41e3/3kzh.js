
function writeCards(names, eventName) {
    let message = [];
    let n = names.length;
    for (let i = 0; i < n; i++) {

        message[i] = ` Thank you, ${names[i]}, for the wonderful ${eventName} gift! `;
    }
    return message;
}
console.log(writeCards(["denno", "nthiga"], "birthday"));
