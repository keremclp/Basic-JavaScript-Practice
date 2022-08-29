let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); //removes last element


secretMessage.push('to', 'Program');//add to and program to the end of the array

secretMessage[7] = 'right'; //change easily to right

secretMessage.shift(); //remove first element

secretMessage.unshift('Programming'); //add Programming to the beginning of the array

secretMessage.splice(6, 5, 'know'); //remove get, right, the, first, time and replace with know

console.log(secretMessage.join(' ')); //print the secret message as a sentence