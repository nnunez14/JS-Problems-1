// HW Question #1 FIND WORDS
let findWords = (dog_names, dog_string) =>{
    var contains_name = false
    for (const dog in dog_names) {
      if (dog_string.toLowerCase().includes(dog_names[dog].toLowerCase())){
        contains_name = true
        console.log("Matched " + dog_names[dog])
      }
    }
    if (contains_name == false) {
      console.log("No Matches")
    }
  }
  
  let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
  let dog_names = ["Max","HAS","PuRple","dog"]
  
  findWords(dog_names, dog_string)


// HW #2
const given_arr = [13, 22, 26, 40, 1, 10]
let replaceEvens = (arr) =>{
    let new_array = [];
    for(let i = 0; i < given_arr.length; i++){
        if(given_arr[i][0]*2 > 50){
            given_arr.filter(given_arr[i])
        }else{
            new_array.push(given_arr[i])
        }
    }
    return new_array
}

console.log(replaceEvens())


// Codewars Problem #1
// For this problem you must create a program that says who ate the last cookie. 
// If the input is a string then "Zach" ate the cookie. If the input is a float or 
// an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. 
// The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! 
// (The reason you return Zach is because the input is a string)
// Note: Make sure you return the correct message with correct spaces and punctuation.

function cookie(x){
    if (typeof x == "string"){
      return "Who ate the last cookie? It was Zach!"
    } else if (typeof x == "number"){
      return "Who ate the last cookie? It was Monica!"
    } else{
      return "Who ate the last cookie? It was the dog!"
    }
  };



// Codewars Problem #2
// In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?

// Example:
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

// Notes:
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    return Math.abs(num) * -1
      }
      
  console.log(makeNegative())
