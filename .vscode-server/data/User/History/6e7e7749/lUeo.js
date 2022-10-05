// code your solution here
function superbowlWin(record, year) {
    let found = record.win(function (win) {
        win.results === "W"
        return found ? found(year) : undefined
    })
}