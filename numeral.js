/*
Use an object to store each correlation to the appropriate numerals.
The object will be genericly referenced based on the [i] counter so that it can reuse the same code
*/

//Converts number to array
function toArray(number) {
	var array = [],
		numberString = number.toString();
	for(var i = 0; i < numberString.length; i++)
		array.push(parseInt(numberString.charAt(i)));
	return array;
}

//Iterate Numeral
function iterateNumeral(value, numeral) {
	var result = "";
	for(var count = value; count > 0; count--)
		result += numeral;	
	return result;
}

function numberToNumeral(number) {
	//Reverse Array created with toArray()
	var array = toArray(number).reverse();

	//Array of Numerals
	var numeralName = ["ones", "tens", "hundreds", "thousands"];
	var numeralValue = {ones: ["I", "V", "X"], tens: ["X", "L", "C"], hundreds: ["C", "D", "M"], thousands: ["M"]};
	//Roman Numeral Holder
	var romanNumeral = [];
	
	//Iterate over the reversed array of the original number
	for(var i = 0; i < array.length; i++) {
		//Set up variables to cycle through numeralName & numeralValue
		var nameHolder = numeralName[i];
		var arrayHolder = numeralValue[nameHolder];

		//Logic to generate the roman numeral
		if(array[i] <= 3) {
			romanNumeral.unshift(iterateNumeral(array[i], arrayHolder[0]));
		} else if(array[i] <= 4) {
			romanNumeral.unshift(arrayHolder[0] + arrayHolder[1]);
		} else if(array[i] <= 5) {
			romanNumeral.unshift(arrayHolder[1]);
		} else if(array[i] <= 8 ) {
			romanNumeral.unshift(arrayHolder[1]+ iterateNumeral(array[i] - 5, arrayHolder[0]));
		} else { 
			romanNumeral.unshift(arrayHolder[0] + arrayHolder[2]);
		}
	}
	return romanNumeral.join("");		
}
