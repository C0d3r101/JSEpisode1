/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}

function pairs(names) {
	let names2 = names // a copy of the provided array to manipulate with affecting original one
	let random =[];
	 
while (names2.length !== 0){
	
	if(name2.length>1){
			namesRandomizing = names2.getRandom()
			random.push(namesRandomizing);
			/*i = names2.indexOf(namesRandomizing);
			names2.splice(i,1);*/
			if (random.length === 2) { break; }
			pairs.push(random);
			random.splice(0,random.length);
			
			if (random.length !== 2 && random.length !== 0){
				continue;
			}
	
	else if (names2.length == 1) {
			pairs.push(random);
			random.splice(0,random.length);
			}

	else {return [];}
	}

export default pairs;

/**********************************************
* READ ME!!!!
*
* We've including this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}
