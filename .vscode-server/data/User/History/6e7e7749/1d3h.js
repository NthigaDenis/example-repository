// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
]



function superbowlWin(record) {
    const result = record.find(record => record.results === W)

    return !!result.year; undefined;
}
