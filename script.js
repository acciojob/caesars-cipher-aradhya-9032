function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line
	const string = encodedStr;
	const arr = [];
 for(let i = 0;i<string.length;i++){
	string.charAt(i) = string.charAt(i+13);
	 arr.push(string[i]);
 }
  return ;//return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
