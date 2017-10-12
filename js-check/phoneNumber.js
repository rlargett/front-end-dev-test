//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"

const phoneNumber = (pNum) => {
	var pNumClean = pNum.replace(/\D/g,"");
	var pNumLen = pNumClean.length;
	if(pNumLen == 9){
		return pNumLen = null;
	} else if(pNumLen == 11 && pNumClean.match(/^[0,2-9]/) || pNumLen >= 12) {
		return pNumClean = null;
    } else {
		return pNumClean;
	}
}

module.exports = phoneNumber
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
