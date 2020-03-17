/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters 
included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".
*/


function rot13(message){
  let newStr = '';
  const alphArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const alphObj = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25
  }
  for(let i = 0; i < message.length; i++) {
    if(alphObj[message[i].toUpperCase()] === undefined && alphObj[message[i].toLowerCase()] === undefined) {
      newStr += message[i];
    } else if(message[i].toLowerCase() === message[i]) {
      let index = parseInt(alphObj[message[i]]) + 13;
      newStr += alphArr[index];
    } else {
      let index = parseInt(alphObj[message[i].toLowerCase()]) + 13;
      let val = alphArr[index]
      newStr += val.toUpperCase();
    }
  }

  return newStr;
}