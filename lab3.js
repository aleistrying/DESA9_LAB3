//problema a resolver:
// Escribir una función que, dada una cadena "t", retorne si un número es un palíndromo de doble base o no. (Palíndromo en base 10 y base 2)
// Escribir una función que, dada una cadena "t", retorne la cantidad de caracteres de la cadena.
// Ejemplo: Dado AABBBACAA
// Se debería retornar que hay 5 A, 3 B, 1 C. El tipo de dato del retorno es a discreción del estudiante.
// Escribir una función que, dado un año "a", retorne si ese año es bisiesto o no.
// Escribir una función que, dado un número "n" ( 0 < n < 1000000), retorne la sumatoria de todos los número primos debajo de ese número.
// Ejemplo: Dado 7
(() => {
    const App = {
        init: () => {
            //asuming input is always a base10 number
            const input1 = "5";///101
            console.log(`1. IsDoubleBasePalindrome('${input1}') => ${App.methods.isDoubleBasePalindrome(input1)}`);

            const input2 = "AABBBACAA";
            console.log(`2. CountChars('${input2}') => ${JSON.stringify(App.methods.countChars(input2))}`);

            const input3 = "2020";
            console.log(`3. IsLeapYear('${input3}') => ${App.methods.isLeapYear(input3)}`);

            const input4 = "7";
            console.log(`4. SumOfPrimes('${input4}') => ${JSON.stringify(App.methods.sumOfPrimes(input4))}`);
        },
        methods: {
            isPalindrome: (str) => {
                return str.split('').reverse().join('') === str;
            },
            isDoubleBasePalindrome: (str) => {
                //check if it's not a number 
                if (isNaN(str)) {
                    console.log("PALINDROME NO ES NUMERO")
                    return false
                }
                //check if palindrome in base 10 and base 2
                return App.methods.isPalindrome(App.methods.toBase10(Number(str)).toString()) &&
                    App.methods.isPalindrome(App.methods.toBase2(Number(str)).toString())

            },
            //accepts number or string either way
            toBase10: (num) => {
                // console.log(num.toString(10))
                //if always base10 this is unnecesary lol
                // return num.toString(10);// if we're using the value of the string characters
                return num.toString(10);//if we're using the literal string input use this
            },
            toBase2: (num) => {
                // console.log(Number(num).toString(2))
                //transform base10 to base2
                return Number(num).toString(2);
            },
            isPrime: (num) => {
                if (num < 2) return false;
                for (let i = 2; i < num; i++) {
                    if (num % i === 0) return false;
                }
                return true;
            },
            countChars: (str) => {//could also be done with a set or something
                let count = {};
                for (let i = 0; i < str.length; i++) {
                    if (count[str[i]]) {
                        count[str[i]]++;
                    } else {
                        count[str[i]] = 1;
                    }
                }
                return count;
            },
            isLeapYear: (str) => {
                return (str % 4 === 0 && str % 100 !== 0) || str % 400 === 0;
            },
            sumOfPrimes: (n) => {
                let res = { sum: 0, primes: [] };
                for (let i = 2; i <= n; i++) {
                    if (App.methods.isPrime(i)) {
                        res.sum += i;
                        res.primes.push(i);
                    }
                }
                return res;
            }
        }
    }
    App.init()
})()