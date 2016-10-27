// `pluck` takes in an array and a callback function
function pluck(arr, key){
  var outputArr = [];
  // iterates through each item in array
  for (var i=0; i<arr.length; i++){
    // adds each item's value for the key into results array
    outputArr.push(arr[i][key]);
  }
  // returns a array of values
  return outputArr;
}

grandparents = [
  {first: "June", last: "Crane", age: 74},
  {first: "Jim", last: "Crane", age:76},
  {first: "Linda", last: "Fuentes", age: 62},
  {first: "Panfilo", last: "Fuentes", age: 76}
  ];

console.log(pluck(grandparents, 'first'));
// ["June", "Jim", "Linda", "Panfilo"]
