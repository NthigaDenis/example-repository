
function countDown{



    while (i >= 0) {
        ret += i;

        if (i > 0) {
            ret += " ";
        }
        i--;
    }
    return ret;

    var result = countDown(10);
    console.log(result);
}
