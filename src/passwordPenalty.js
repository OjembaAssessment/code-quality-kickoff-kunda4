/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  let count = {};
  let myArr = [];
  let myPass = password.toLowerCase().split("");
  myPass.map((elt) => {
    if (count[elt]) {
      count[elt]++;
    } else {
      count[elt] = 1;
    }
    if (count[elt] >= 2) myArr.push(elt, count[elt]);
  });
  return myArr;
}

console.log(penaltyPoints((password = "U2jSS277pQ")));
