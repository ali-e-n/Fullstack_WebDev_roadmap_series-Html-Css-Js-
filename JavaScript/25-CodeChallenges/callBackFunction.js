function callBack(someNumber){
    return someNumber * 2 ;
}


function main(randomNumber, shouldCall, callbackFunction){

    let results = randomNumber;

    if(shouldCall){
        results = callBack(randomNumber);
    }
    return results;

}

console.log(main(20, true, callBack)); 

/*
 Another way
main(20,true, function (num) {
    return num * 2;})

 Another way
main(20, true, num => {
    return num * 2;
})

 Another way
main(20, true, num => num *2)

*/
