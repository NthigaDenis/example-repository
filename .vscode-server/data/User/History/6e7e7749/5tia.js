// code your solution here

function superbowlWin(records) {
    const foundObj = records.find((record) => {
        if (record["results"] === "W") {
            return record["year"]
        }


        else { return "undefined" }

    })
}
