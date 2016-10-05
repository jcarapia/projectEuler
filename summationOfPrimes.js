// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

//Below is a modified Sieve of Eratosthenes function 
//to return the sum of all primes up to a limit. 

function eratosthenesSum(limit) {
    //initiate the sum at 0
    var primeSum = 0;
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
                primeSum = primeSum + p;
        }
    }
    return primeSum;
};

console.log(eratosthenesSum(2000000)) //142913828922

