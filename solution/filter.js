// `filter` takes in an array and a callback function
function filter(arr, callback){
  var outputArr = [];
  // iterates through each item in array
  for (var i=0; i<arr.length; i++){
    // calls callback function with item
    if(callback(arr[i])){
      // adds the item to the output if true is returned
      outputArr.push(arr[i]);
    }
  }
  // returns filtered array of results
  return outputArr;
}


function isEven(num){
	return num % 2 === 0;
}

console.log(filter([1, 2, 3, 4, 5, 6], isEven));

//  [2, 4, 6]
