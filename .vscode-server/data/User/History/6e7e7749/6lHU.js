// code your solution here

function superbowlWin(records) {
    const foundObj = record.find((record) => {
        return record["results"] === "W";
    });

    if (foundObj !== undefined) {
        return foundObj["year"];
    }
}

