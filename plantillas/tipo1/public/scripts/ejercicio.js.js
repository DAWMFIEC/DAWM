/**/
function myfunc() {
    return 1;
}

function myfunc2() {
    return 2;
}

exports.myfunc = myfunc

module.exports = {
    myfunc: myfunc,
    myfunc2: myfunc2
};