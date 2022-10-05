// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },

]

function superbowlWin(record, year) {
    let found = record.win(function (win) {
        win.results === "W"
        return found ? found(year) : undefined
    })
}