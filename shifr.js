'use strict';

const arr = new Array();

for (let j = 0; j < 26; j++) {  arr.push(new Array()); } // creation an array with 26 empty elements
for (let i = 0; i < 26; i++) {

  for (let k = 0; k < 26; k++) {
    arr[i].push(String.fromCharCode((i + k) % 26 + 97));
  }
}


const shifr = function(key, word) {
  const arrkey = key.split('');
  const arrword = word.split('');

  for (let i = 0; arrkey.length < arrword.length; i++) {
    arrkey.push(arrkey[i]);
  }
  //console.log(arrkey);

  const index = [];
  for (let i = 0; i < arrkey.length; i++) {
    const k = arrkey[i].charCodeAt(0) - 97;
    const j = arrword[i].charCodeAt(0) - 97;
    index.push(arr[k][j]);

  }
  const one = index.join('');
  console.log(one);
};

shifr('bay', 'aord pass');
//console.dir(arr);
