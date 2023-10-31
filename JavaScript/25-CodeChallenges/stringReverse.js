//Function to Reverse a String 


function reverseString(str){

    const stringArray = str.split("");
    const reversedArray = stringArray.reverse();      
    const finalString = reversedArray.join("");

    return finalString;
}

reverseString("Ali");

/*

*******This can also be written in one line by************

function reverseString(str){

   return str.split("").reversed().join("");
}



*/