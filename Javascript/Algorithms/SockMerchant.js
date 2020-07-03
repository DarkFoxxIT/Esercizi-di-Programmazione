/*
+++++Description+++++++
John works at a clothing store. 
He has a large pile of socks that he must pair by color for sale. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

For example, there are n = 7 socks with colors ar = [1,2,1,2,1,3,2] . There is one pair of color 1 and one of color . 
There are three odd socks left, one of each color. The number of pairs is 2.

++++Function Description+++++

Complete the sockMerchant function in the editor below. 
It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):
n: the number of socks in the pile
ar: the colors of each sock

Input: 
The first line contains an integer n , the number of socks represented in  ar.
The second line contains n space-separated integers describing the colors ar[i] of the socks in the pile.
*/

/*
PSEUDOCODE
-Need to initiate a count variable to count pairs and return the value
-sort the given array
-loop through the sorted array 
-if the current item equals to the next item 
-then that's a pair, increment our count variable
-also increment i to skip the next item
-return the count value
*/

//Code
function sockMercahnt(n_sock, socks){
  let count_pair = 0; 
  socks.sort();
  for(let s = 0; s < n_sock-1; s++){
    if (socks[s] === socks[s+1]){
      count_pair++;
      s+=1;
    }
  }
  return count_pair;
}

//Test
socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
n_sock = 9

console.log(sockMercahnt(n_sock,socks))
