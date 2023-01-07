



//Exporting the module
// -- In plain javascript we use module.exports, in Node we can use exports. only

exports.getDate  = function(){
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-us",options);
}

//Exporting the module
exports.getDay = function(){
    const today = new Date();

    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-us",options);
}