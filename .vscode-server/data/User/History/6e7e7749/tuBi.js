// code your solution here

function superbowlWin(records) {
    const foundObj = records.find((record) => {
        return record["results"] === "W";
    });
    if (foundObj !== undefined) {
        return foundObj["year"];
    }
}