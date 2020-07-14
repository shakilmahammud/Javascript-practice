function isPrime(n){
    for(i=2;i<n;i++){
        if(n%i==0){
            return 'Is Not a Prime Number'
        }
    }
    return 'Is a Prime Number'
}

var result =isPrime(9);//enter a n value  check is prime or not
console.log(result);