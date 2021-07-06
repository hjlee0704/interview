const arr = s.split(''), stack = []
    
for(let i = 0; i < arr.length; i++) {
    if(arr[i] == '(') stack.push(i);
    else if(arr[i] == ')') {
        if(stack.length) stack.pop();
        else arr[i] = '';
    }
}
for(let i of stack) arr[i] = '';
return arr.join('');