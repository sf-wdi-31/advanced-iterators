// `partition` takes in an array and a callback function
function partition(arr, callback){
  var trueArr = [];
  var falseArr = [];
  // iterates through each item in array
  for (var i=0; i<arr.length; i++){
    // calls callback function with item
    // and decides whether to push the item into the true or false array
    if(callback(arr[i])){
      trueArr.push(arr[i]);
    } else {
      falseArr.push(arr[i]);
    }
  }
  // returns a combined array of partitioned results
  return [trueArr, falseArr];
}

function isOdd(num){
  return num % 2 !== 0;
}

console.log(partition([0, 1, 2, 3, 4, 5], isOdd));
// [[1, 3, 5], [0, 2, 4]]
