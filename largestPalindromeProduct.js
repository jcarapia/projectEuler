// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindromeProduct(){
	var palindromes = [];
	for(var i = 998001; i >= 100000; i--){
		var string = i.toString();
		if(string[0] === string[5]){
			if(string[1] === string[4]){
				if(string[2] === string[3]){
					palindromes.push(i);
				}
			}
		}
	}
	//console.log(palindromes)
	return palindromes;
};

function checkIfDivisibleBy3(){
	var palindromes = largestPalindromeProduct();
	//console.log(palindromes)

	var lastIndex = palindromes.length - 1;

	for(var i = 0; i <= lastIndex; i++){

		for(var j = 999; j >= 100; j--){

			if(palindromes[i] % j === 0){
				if(palindromes[i] / j <= 999){
					return palindromes[i];
				}
			}

		}
	}
}

//console.log(largestPalindromeProduct())
console.log(checkIfDivisibleBy3())
