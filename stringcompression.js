var compress = function(chars) {
	
	// var i is reading, var index is writing
    let  i = 0
    let index = 0
    
    while(i < chars.length){
	
        let j = i
        
		// counter for number of same letters
        while(j < chars.length && chars[i] === chars[j]) j++
        
		// write compress letter
        //let check = index++;\console.log(chars, j, index, 'out');
      //  console.log(index, 'out');
        chars[index++] = chars[i]
        //console.log(chars[index]);
      //  console.log(chars, j, index, 'out');
		// write number for compressed letter
        if(j - i > 1){
		
			// if the number is >= 10 the string version will have a length of 2 instead of 1
            let num = (j - i).toString()  
            for(let k = 0; k < num.length; k++){
                chars[index++] = num[k]
              //  console.log(chars, j, index, 'in');
            }
        }
		// Even though there are nested while loops the time is N because i is updated to j
        i = j
    }
	//console.log(chars)
	// Since the "compressing" is done in place index returns the updated version
    return index;
};