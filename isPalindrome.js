// Write your code below
function palindrome(str) {
    str = str.toLowerCase().replace(/(\W)|(\_)/g,"").split("");
    for(let i =0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 -i]){
            return false;
        }
    }
    return true;
}
console.log(palindrome("eye"))
console.log(palindrome("race car"))
console.log(palindrome("nope"))
console.log(palindrome("a man, a plan, a canal. Panama"))
console.log(palindrome("espresso"))


const isPalindrome = str => {
    for(let i = 0; i < str.length; i++){
        let finalIndex = str.length - 1 -i
        if(str[i] !== str[finalIndex]){
            return false
        }
    }
    return true
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("apple"))
