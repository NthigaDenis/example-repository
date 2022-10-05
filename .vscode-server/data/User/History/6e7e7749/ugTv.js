// code your solution here

const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
]
function superbowlWin(records) {
    const foundObj = records.find((record) => {
        return record["results"] === "W";
    });
    if (foundObj !== undefined) {
        return foundObj["year"];
    }
}