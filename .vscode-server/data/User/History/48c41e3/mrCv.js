let message = [];
function writeCards(names, eventName) {
    let n = names.length;
    for (let i = 0; i < n; i++) {

        message = ` "Thank you, ${names[i]},for the wonderful ${eventName} gift!", `;
    }
    return message;
}
console.log(writeCards(["denno", "nthiga"], "birthday"));
