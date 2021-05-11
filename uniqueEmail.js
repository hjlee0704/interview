var numUniqueEmails = function(emails) {
    
  //change email with + or . to no + nor .
  // add to set if not exist
  //return how many in set
  
  //break before and after @
  // then erase +, . part then join the string again
  //then compare
  let result = new Set();
  for (let i = 0; i < emails.length; i++) {
      let curEmail = modify(emails[i])
      console.log(curEmail);
      if (!result.has(curEmail)) {
          result.add(curEmail)
      }
  }
  return result.size;
  
};

const modify = (str) => {
  let newStr = str.split('@');
  let firstWord = newStr[0].replace(/\./g, '');
  console.log(firstWord);
  if (firstWord.includes('+')) {
      let subOne = firstWord.split('+');
      firstWord = subOne[0];
  }
  
  let secondWord = newStr[1];
  return firstWord + '@' + secondWord;
}

var numUniqueEmails = function(emails) {
	for(let i = 0; i<emails.length; i++){        

		let first = emails[i].substring(0, emails[i].indexOf('@')) //get first part of email
		let last = emails[i].substring(emails[i].indexOf('@')+1, emails[i].length)//get last part of email

		first = first.split(".").join(""); //remove all periods
		let indexOfAddSign = first.indexOf('+') //get index of +

		if(indexOfAddSign >= 0){ //remove everything after + from frist part
			first = first.substring(0,indexOfAddSign)
		}
		emails[i] = first + '@' + last //replace email with corrected version
	}
  return [...new Set(emails)].length //create a Set of the emails, this removes duplicates
};