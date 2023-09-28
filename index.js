function hasTargetSum(array, target) {
  // Write your algorithm here
  array.sort(function(a, b) {
    return a - b;
  });
  
  for (let i = 0; i <= array.length; i++) {
    const lastNum = array[array.length - 1];
    for (let x = 0; x <= array.length - 1; x++) {
      if(array.length<= 2 && lastNum + array[x] !== target){
        return false
      }else if(lastNum + array[x] === target){
        return true
      }
    }
    array.pop()

  }
}

/* 
  Write the Big O time complexity of your function here
    
  array.sort(function(a, b) {
    return a - b;
  });  -----------------  0(n log(n))
  
  for (let i = 0; i <= array.length; i++) {
    const lastNum = array[array.length - 1];
    for (let x = 0; x <= array.length - 1; x++) {
      if(array.length<= 2 && lastNum + array[x] !== target){
        return false
      }else if(lastNum + array[x] === target){
        return true
      }
    }   ----------------- O(n²)
    array.pop() --------- 0(1)

  }
}-------------------------0(1+n²+n log(n)) = 0(n² log(n))?
*/

/* 
  Add your pseudocode here
  sort array ascending
    use a compare callback function to ensure value ascending
  iterate on the numbers in array
  get lastNum in array
    for the matching numbers iterate on the array values(x) until you get to the lastNum
    if wholeNum === lastNumInArray + XNumInArray
      return true
    else continue to iterate over next num up in array

  if no match found remove the lastNum to evaluate the next
*/

/*
  Add written explanation of your solution here
  My SOlution was to perform the evaluation by reducing scope of the array at same time.
  -First Sort in numeric order
  -sorted array gets looped 
    -gets lastNum in array
    -loops through the rest of the num in array
      -from 1st num up to lastNum
        -if Xnum+lastNum === the targetNum
          -return true
        -if the array is less than 2 values AND those values do not evaluate to the target
          -return false
      -if the loop found no matches for lastNum then we remove it from the array and loop to the next lastNum in Array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

   console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 0, 19, 4, 6, 25, 30], 25));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
