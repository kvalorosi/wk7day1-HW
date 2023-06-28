
//Excercise 1

let string = "Hello Max, my name is Dog, and I have purple eyes!"
let names = ["Max","HAs","PuRple","dog"]
console.log(string)

let findWords = (string,names) => {
    for(let i = 0; i < names.length; i++){
        if (string.toLowerCase().includes(names[i].toLowerCase())){  //I got this line off the interent. I understand what includes does, it allows you to look for a specific value in a string, in this case specific words in a string.
        console.log("Matched dog_name:", i);
        }else {
        console.log('No Matches');
    }

}
}
findWords(string, names)   

//Excercise 2
let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

let replaceEvens = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if (i % 2 === 0){
            arr[i] = "even_index";
        }
    }
        
    console.log(arr);
        
};
replaceEvens(arr);



