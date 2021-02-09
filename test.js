let finaltest = [];

function test(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (total > 0) {
      //ghous
      total = i;
      break;
    }
    for (let j = 1; j < s.length; j++) {
      if (i === s.length - 1 && j === s.length - 1) break;

      if (finaltest.length > 0) {
        for (let k = 0; k < finaltest.length; k++) {
          if (s[i] != finaltest[k] && s[i] != s[j]) {
            total++;
          }
        }
      } else {
        if (s[i] != s[j]) {
          finaltest.push(s[i]);
        } else {
          total = 0;
          break;
        }
      }
    }
  }
  if (total > 0) {
    return total;
  } else return -1;
}

console.log(test("gghous"));
console.log(test("stats"));
