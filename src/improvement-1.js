/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function countR(str) {
  let count = 0;
  str.split("").map((elt, index) => {
    if (str[index] == "R") count++;
  });

  return count;
}
console.log(countR("React"));
