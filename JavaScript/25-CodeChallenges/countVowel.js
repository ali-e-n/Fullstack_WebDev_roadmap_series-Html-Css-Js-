// Function for Counting the number of Vowels in an input String



function vowelCount (str){
    
    let count = 0;
    strArray = str.split('');

    for(let i = 0; i < strArray.length; i++){
        switch(strArray[i]){
            case 'a' :
                count++;
                break;
            case 'e' :
                count++;
                break
            case 'i' :
                count++;
                break;
            case 'o' :
                count++;
                break;
            case 'u' :
                count++;
        }
    }
    return count;
}

//testing function

// Testing function
console.log(vowelCount("Hi! I am Ali")); // Output: 3