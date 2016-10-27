// `where` takes in an array and an object of properties
function where(arr, properties){
  var outputArr = [];
  var obj;
  var isMatch;
  // iterates through each item in array
  for (var i=0; i<arr.length; i++){
    obj = arr[i];
    isMatch = true;
    // iterates through all keys inside the properties object
    for (key in properties){
      // checks if item is missing any keys or not matching any key-value pairs
      if (!obj.hasOwnProperty(key) || obj[key] !== properties[key]){
        isMatch = false;
      }
    }
    if(isMatch){
      outputArr.push(obj);
    }
  }
  return outputArr;
}

events = [
  {location: "Yerba Buena", day: "Wednesday", time: "0900"},
  {location: "GA", day: "Tuesday", time: "1830"},
  {location: "Blue Bottle", day: "Tuesday", time: "1100"},
  {location: "GA", day: "Thursday", time: "1830"},
  {location: "GA", day: "Thursday", time: "0917"}
  ];

console.log(where(events, {time: "1830", location: "GA"}));
//    [
//			{location: "GA", day: "Tuesday", time: "1830"},
//			{location: "GA", day: "Thursday", time: "1830"}
//	  ]
