//stack

var removeDuplicates = function(s, k) {
	// format - [<value>, <count-of-consecutive-same-values>]
    const stack = [];
    
    for(let i = 0; i < s.length; ++i) {
		// if stack is not empty and the stack.top() value is same as the value at index i
        if(stack.length > 0 && stack[stack.length - 1][0] === s[i]) {
			// set the count value as + 1
            ++stack[stack.length - 1][1];
        } else {
			// else push the value into the stack with count value 1
            stack.push([s[i], 1]);
        }

		// if count value at stack top is equal to k, pop the value
        if(stack[stack.length - 1][1] === k) {
            stack.pop();
        }
    }
	// initialise the resultant string - will construct it based on stack values
    let result = '';
    for(let i = 0; i < stack.length; ++i) {
		// add the value in the resultant string as many times as the count value
        while(stack[i][1]) {
            result += stack[i][0];
            --stack[i][1];
        }
    }
    return result;
}

// 2 pointers
var removeDuplicates = function(s, k) {
	// result - to store the resultant string without duplicates
	// count - to keep note of count of consecutive duplicate values
    const result = [],
          count = [];
    let i, j;
    
	// i is used to maintain the pointer at result and count array
	// j is used to iterate over the string s
    for(i = 0, j = 0; j < s.length; ++i, ++j) {
		// add s[i] to result and set count as 1 initially
        result[i] = s[j];
        count[i] = 1;

		// if the value adjacent to recently added value is same
        if(i > 0 && result[i - 1] === result[i]) {
			// update the value of count
            count[i] = count[i - 1] + 1;
            
			// if count is equal to k, set the value for i as the index from where to add the new value
			// go back k places since duplicates will not be considered
            if(count[i] === k) {
                i -= k;
            }
        }
    }
	// since result is an array, use join to convert it into a string and get the resultant substring
    return result.join('').substring(0, i);
};