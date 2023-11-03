function consecutiveSubstrings(string) {
  const result = [];
  const stringArr = string.split("");
  stringArr.forEach((char, index) => {
    let substring = "";
    stringArr.slice(index).forEach((subchar) => {
      substring += subchar;
      result.push(substring);
    });
  });
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));

  console.log("expecting [w, we, wer, were, e, er, ere, r, re, e]");
  console.log(consecutiveSubstrings("were"));

  console.log("expecting []");
  console.log(consecutiveSubstrings(""));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
initialize result array as []
turn string into array
for each char in string, include index
  const substring = '';
  for each subchar in string.slice(index)
    substring += subchar
    push substring into result array
return result
*/
