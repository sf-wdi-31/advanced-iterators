# Interview Prep - Iterators

Today you'll be implementing iterator functions on the whiteboard in pairs or threes. As you work through, alternate who is the "candidate" for each problem.  The candidate's job will be to convince the other person, the "interviewer," that they've solved the problem.  The "interviewer" can look at the solution and give hints if needed.

**Note:** DO NOT use any built-in iterator functions. You will often be asked in interviews to implement well-known methods like this from scratch as problem-solving exercises.


## How to Get Started

* Use pseudo-code to plan the logic of your function before writing actual code on the board.

* Write down at least one new example of test input, and write down the expected output. **Hint:** For many iterators, one of your test inputs will be a function.

* Only when you have pseudocode and test input with expected output should you write code to implement the body of the function.

## Problems


1. `each(arr, callback)`

	```js
	function exclaim(phrase){
		console.log(phrase + "!");
	}

	each(["hi", "what?"], exclaim);

	// hi!
	// what?!
	// => undefined
	```

  Write a function called `each` that takes in an array and a callback function. `each` should iterate through all items in the array and call the callback function with each item as a parameter. `each` should return `undefined`.

2. `map(arr, callback)`

	```js
	function question(phrase){
		return phrase + "?";
	}

	map(["who", "you"], question);

	// => ["who?", "you?"]
	```

	Write a function called `map` that takes in an array and a callback function. `map` should iterate through all items in the array, call the callback function with each item and its index as parameters, and return a new array containing all the values returned by the callback.

1. `filter(arr, callback)`

	```js

	function isEven(num){
		return num % 2 === 0;
	}

	filter([1, 2, 3, 4, 5, 6], isEven);

	// => [2, 4, 6]
	```

	Write a function called `filter` that takes in an array and another function (which will return a boolean). `filter` should iterate through the array, check whether each the callback function returns true for each value, and return a new array containing all the values that did return true.




1. `partition(arr, callback)`


	```js
	function isOdd(num){
		return num % 2 !== 0;
	}

	partition([0, 1, 2, 3, 4, 5], isOdd);
	// => [[1, 3, 5], [0, 2, 4]]
	```

	Write a function called `partition` that takes in an array and a callback function.  `partition` should split the array into two arrays: one with all the elements for which the callback returned true, and one with all the elements for which the callback returned false. It should return a new array with the two partitioned arrays nested inside.



1. `pluck(arr, key)`

	```js
	grandparents = [
	  {first: "June", last: "Crane", age: 74},
	  {first: "Jim", last: "Crane", age:76},
	  {first: "Linda", last: "Fuentes", age: 62},
	  {first: "Panfilo", last: "Fuentes", age: 76}
	  ];

	pluck(grandparents, 'first');
	// =>["June", "Jim", "Linda", "Panfilo"]
	```

	Write a function called `pluck` that takes in an array of objects and a key. `pluck` should iterate through the array, pick out the value each object has associated with the given key, and return a new array containing those values.

1. `where(arr, properties)`

	```js

  events = [
		{location: "Yerba Buena", day: "Wednesday", time: "0900"},
		{location: "GA", day: "Tuesday", time: "1830"},
		{location: "Blue Bottle", day: "Tuesday", time: "1100"},
		{location: "GA", day: "Thursday", time: "1830"},
		{location: "GA", day: "Thursday", time: "0917"}
		];

	where(events, {time: "1830", location: "GA"});
	// => [
	//			{location: "GA", day: "Tuesday", time: "1830"},
	//			{location: "GA", day: "Thursday", time: "1830"}
	//	  ]
	```


	Write a function called `where` that takes an array of objects and another object. `where` looks through each object in the array and returns a new array containing the objects that match *every* key-value pair given in the second argument.

1. `isEqual(obj1, obj2)`

	```js
  thing1 = {
		flavor: "mango",
		nutritionInformation: {
			calories: 80,
			sugar: 2,
			servingSize: "8 oz"
		}
	};

	thing2 = {
		flavor: "mango",
		nutritionInformation: {
			calories: 80,
			sugar: 2,
			servingSize: "8 oz"
		}
	};

	isEqual(thing1, thing2);
	// => true
	
	thing1 == thing1;
	// => true

	thing1 == thing2;
	// => false
	```


	Write a function called `isEqual` that takes in two objects. `isEqual` compares the objects based on the _values_ of all of the keys and values inside. (Why is this different from normal `==` behavior?)  It returns `true` if the objects have all the same keys and matching values, even if they're not stored in the same memory location. It returns false if not. Note that a solution is not provided in this repo.  Feel free to check out lodash's [source code for `baseIsEqual`](https://github.com/lodash/lodash/blob/4.16.4/lodash.js#L3266).
