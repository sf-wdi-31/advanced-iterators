// `each` takes in an array and a callback function
var each = function(list, callback) {
  // iterates through each item in array
  for (var i = 0; i < list.length; i += 1) {
    // calls callback function with item
    callback(list[i]);
  }
};

function exclaim(phrase){
  console.log(phrase + "!");
}

console.log(each(["hi", "what?"], exclaim));

// hi!
// what?!
// => undefined
