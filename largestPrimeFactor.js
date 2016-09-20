// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(num){
	
	var largestPossibleFactor = Math.ceil(num / 2);

	for(var i = largestPossibleFactor; i > 0; i--){
		if(primeChecker(i) && num % i === 0){
			return i
		}
	}
};

function primeChecker(num){
	//you only need to check up to the square root of the number
	//to determine if it has any multiples other than itself and 1

	//2 is considered a prime number 
	if(num === 1 || num === 2 || num === 3){
		return true;
	};

	if(num % 2 === 0 || num % 3 === 0 || num % 4 === 0 || num % 10 === 0){
		return false;
	};

	var max = Math.floor(Math.sqrt(num));

	for(var i = 2; i <= max; i++){
		if(num % i === 0){
			return false;
		}
	}
	return true
};

function primesArray(number){
	var primesArray = [];
	for(var i = 1; i <= number; i++){
		if(primeChecker(i)){
			primesArray.push(i);
		}
	}
	return primesArray[primesArray.length-1];
};

function eratosthenes(limit) {
    var primes = [];
    if (limit >= 2) {
        var sqrtlmt = Math.sqrt(limit) - 2;
        var nums = new Array(); // start with an empty Array...
        for (var i = 2; i <= limit; i++) // and
            nums.push(i); // only initialize the Array once...
        for (var i = 0; i <= sqrtlmt; i++) {
            var p = nums[i]
            if (p)
                for (var j = p * p - 2; j < nums.length; j += p)
                    nums[j] = 0;
        }
        for (var i = 0; i < nums.length; i++) {
            var p = nums[i];
            if (p)
                primes.push(p);
        }
    }
    return primes;
}
 
var primes = eratosthenes(100000000);

console.log(primes[primes.length-1])
//console.log(primeChecker(600851475143))
//console.log(largestPrimeFactor(10000000))
//console.log(primesArray(10000000))

