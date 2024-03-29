function validate(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        //add 1 if exist or initalize to 1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
         //add 1 if exist or initalize to 1
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter1); //debugging
    console.log(frequencyCounter2); //debugging

    for (let key in frequencyCounter1) {
        if(!(key ** 2  in frequencyCounter2)) {
            return false;
        }
        //if the value of the key for frequencyCounter2 is not equal to the value of the key for frequencyCounter1
        //Example if there are two 4's (2 squared) in freq2 there needs to two 2's that match in freqOne
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(validate([1,2,3,2],[9,1,4,4]));