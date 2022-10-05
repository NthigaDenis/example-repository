// code your solution here

function superbowlWin(record) {
    const foundObj = record.find((record) => {
        return record["results"] === "W";
    });

    if (foundObj !== undefined) {
        return foundObj["N/A"];
    }
}

