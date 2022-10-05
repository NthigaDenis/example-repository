// code your solution here

function superbowlWin(records) {
    const foundObj = records.find((record) => {
        if (record["results"] === "W") {
            console.log(record["results"])
            return record["year"]
        }


        else { return "undefined" }

    })
}
