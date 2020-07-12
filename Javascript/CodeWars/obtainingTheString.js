/*
* You are given two strings s and t. Both strings have length n and consist of lowercase Latin letters.
* You can successively perform the following move any number of times (possibly, zero):
* swap any two adjacent (neighboring) characters of s (i.e. for any i={0,1,2,…,n−2} you can swap si and si+1).
*
*/





function swapChar(s,t){
let steps = 0; // declare variable counter that count swap step
for(let charSingle = 0; charSingle < s.length; s++){ // Loop s string 
  let charContain = t.indexOf(s[charSingle]);  // check if any value of s contain in t 
  if( charContain === -1){
    return -1}   // condition zero swap 
  t = t.slice(0,charContain) + t.slice( 1 + charContain); //  to remove the character from t at a specific index. It's possible use substring()
  steps += charContain // count ++ 
  }
  return steps;

}

//TEST
let s = "abcdef"
let t = "abdfec"

swapChar(s,t) // 4 

//Other solutions:

function obtain(s, t) {
  if (s.length === 0 && t.length === 0) return 0;
  if (s.length === 0 || t.length === 0) return -1;
  
  const i = t.indexOf(s[0]);
  const r = obtain(s.replace(s[0],''), t.replace(s[0],''));
  return (i >= 0 && r >= 0) ? i+r : -1;
}


function obtain(s, t) {
    var st = s.split('').sort().join('');
    var tt = t.split('').sort().join('');
    if (st != tt) return -1;
    var res = 0;
    var swap = (arr, i, j) => {
        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    s = s.split('');
    t = t.split('');
    for (var i = 0; i < s.length; ++i) {
        var j = i;
        while (s[j] != t[i])++j;
        while (s[i] != t[i]) {
            swap(s, j-1, j);
            --j;
            ++res;
        }
    }
    return res;
}
