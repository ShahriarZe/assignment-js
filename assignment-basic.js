//-------Problem-1---------- 

function cubeNumber(number) {
    if ( typeof number !== 'number'){
        return 'Give a Number!'
    }
    else if ( number < 0){
        return 'Give a Positive Number!'
    }
    else ( result = Math.pow(number,3))
        return result;
    }

let input = cubeNumber(3);
console.log(input);



//--------Problem-2------------ 

function matchFinder(string1, string2) {
    if (typeof (string1, string2) !== 'string') {
        return 'Give a String'
    }
    else if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}
let input2 = matchFinder('Peter Parker', 'pen');
console.log(input2);



//---------Problem-3------------

function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return 'Give a Valid Array';
    }
    else if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    }
    else if (arr[1] > arr[0]) {
        return [arr[1],arr[0]];
    }
    else if (arr[0] > arr[1]) {
        return [arr[0],arr[1]];
    }
    else {
        return "equal";
    }
}
console.log(sortMaker([4,-2]));



//----------Problem-4-----------

function findAddress(obj) {
    if (typeof obj !== 'object') {
        return 'Give a Valid Object';
    }
    else {
        const firstProperty = obj.street || '__';
        const secondProperty = obj.house || '__';
        const thirdProperty = obj.society || '__';
        return firstProperty + ',' + secondProperty + ',' + thirdProperty;
    }
}
let object = findAddress({ street: 10 })
console.log(object);




//-------Problem-5-------------

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return 'Give a Valid Array'
    }
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        const element = changeArray[i];
        sum += element;
        if (sum > totalDue) {
            return true;
        }
    }
    return false;
}
let pay = canPay([1,5,5], 10);
console.log(pay);



