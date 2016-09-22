// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindromeProduct(){
	var palindromes = [];
	for(var i = 999999; i >= 100000; i--){
		var string = i.toString();
		if(string[0] === string[5]){
			if(string[1] === string[4]){
				if(string[2] === string[3]){
					palindromes.push(i);
				}
			}
		}
	}
	return palindromes;
};

function checkIfDivisibleBy3(){
	var palindromes = largestPalindromeProduct();

	var lastIndex = palindromes.length - 1;

	for(var i = lastIndex; i >= 0; i--){

		for(var j = 999; j >= 100; j--){

			if(palindromes[i] % j === 0){
				return (palindromes[i], j)
			}

		}
	}
}

//console.log(largestPalindromeProduct())
console.log(checkIfDivisibleBy3())