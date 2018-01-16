var api = {};

/**
  PART 1: Implement fanOut.

  fanOut - return a new collection of results after applying the
           input function to each item in the input collection.

  args: input - input collection
        fn - function to apply to each item in the collection

  EX:  - fanOut([1, 2, 3], double) -->  [1, 4, 9];

 function double(n) { return n * n; }

  Restrictions:
    - Do not use make any function calls (other than fn and push)
    - You may not use any external libraries

*/
api.fanOut = (input, fn) => {
  /**
   * Your implementation goes here
   */
  var input2 = input.map( fn );
   return input2;
};

/**
 PART 2: Implement funnel.

 funnel - return an result after applying an accumulation function to
          each item in the collection. Funneling down to a single result.

 args: input - input collection
       fn - function to apply to each item in the collection with
            args accumulation value and current value
       startValue - start the accumulation with this value

 EX:  - funnel([1, 2, 3], add, 0) -->  6;
      - funnel([1, 2], add, 1) --> 4

      function add(total, n) { return total + n; }

 Restrictions:
   - Do not use make any function calls (other than fn and push)
   - You may not use any external libraries

 */
api.funnel = (input, fn, startValue) => {
  /**
   * Your implementation goes here
   */
  function add(a, b) {
    return a + b;
  }
  var total = startValue;

  input.forEach( function(value){
    total = fn(total, value);
  });
  return total;
};

/**
 PART 3: Implement distill.

 distill - return a new collection of results after applying the
 predicate function to each item. Only include the item in the result
 if the predicate returns true.

 args: input - input collection
 fn - predicate function to apply to each item in the collection

 EX:  - distill([1, 2, 3], isEven) -->  [2];
      - distill([1, 2, 3], isOdd) -->  [1, 3];
      - distill([1, 2, 3], isNegative) -->  [];

 Restrictions:
 - Do not use make any function calls (other than fn and push)
 - You may not use any external libraries

 */
api.distill = (input, fn) => {
  /**
   * Your implementation goes here
   */
  var result = [];
  var findings = input.map( fn );

  findings.forEach( function(value, index){
    if( value === true ) {
      result.push(input[index]);
    }
  }); 

  return result;
};

/**
 PART 4: Implement numberOfChars.
 numberOfChars - return the number of characters in the input array of strings

 args: input - input collection of strings (words)

 EX:  - numberOfChars(['the']) -->  3;
 - numberOfChars(['the', 'end']) -->  6;

 Restrictions:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries

 */
api.numberOfChars = (input) => {
  /**
   * Your implementation goes here
   */
   var result = '';
   for (var i = 0; i < input.length; i++) {
     result += input[i];
   }


  return result.length;
};

/**
 PART 5: Implement numberOfCertainChars.

 numberOfCertainChars - return the number of c characters in the input array of strings

 args: input - input collection of strings (words)
       c - the certain character to count

 EX:  - numberOfCertainChars(['the'], 'e') -->  1;
      - numberOfCertainChars(['the', 'end'], 'e') -->  2;

 Restrictions:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries

 */
api.numberOfCertainChars = (input, c) => {
  /**
   * Your implementation goes here
   */
   var result = '';
   for (var i = 0; i < input.length; i++) {
     result += input[i];
   }

   return result.split(c).length-1
};

module.exports = api;