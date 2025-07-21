let myArray=[1,2,3]

function addToArray(...newElements){
    myArray = [...myArray, ...newElements];
}

addToArray(4,5,6);
console.log(myArray);