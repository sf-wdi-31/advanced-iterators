// `map` takes in an array and a callback function
var map = function(list, callback) {
  var mappedList = [];
  // iterates through each item in array
  for (var i = 0; i < list.length; i += 1) {
    // calls callback function with item and index (adds result to `mappedList`)
    mappedList.push(callback(list[i], i));
  }
  // returns mapped array of results
  return mappedList;
};

function question(phrase){
  return phrase + "?";
}

console.log(map(["who", "you"], question));

// => ["who?", "you?"]
