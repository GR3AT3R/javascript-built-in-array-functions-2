function isPalindrome(string) {
  // Start coding here
  const reversed = string.split('').reverse().join('');
  return string === reversed;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false