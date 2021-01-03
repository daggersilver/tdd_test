
function capitalize(string){
    return string[0].toUpperCase() + string.substr(1, string.length);
}

function reverseString(string){
    return string.split("").reverse().join("");
}

const calculator = {
    add: (a, b) => {return a + b},
    subtract: (a, b) => {return a - b},
    multiply: (a, b) => {return a * b},
    divide: (a, b) => {return a / b}
}

function caeserCipher(string, factor){
    var tempArr = [];
    for(var i=0; i<string.length; i++){
        var reg = /[a-zA-Z]/

        if(reg.test(string[i])){
            var code = string[i].charCodeAt(0);
            if((code>=97 && code + factor <= 122) || (code<97 && code + factor <= 90)){
                var letter = String.fromCharCode((code)+factor);   
            } else{
                var letter = String.fromCharCode((code - 26)+factor);
            }
            tempArr.push(letter);
        } else{
            tempArr.push(string[i]);
        }
    }

    return tempArr.join("");
}

function analyze(arr){
    var average = arr.reduce((a, b)=> {return a+b}) / arr.length;
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var length = arr.length;

    return {average, min, max, length}
}


module.exports = {
    capitalize,
    reverseString,
    calculator,
    caeserCipher,
    analyze
}