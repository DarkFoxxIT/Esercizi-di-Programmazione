/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let mySet = new Set();        //Create a new Set It allows for unique values
    for(i of nums){     
                                 // loops iterable object
        if(mySet.has(i)){       //Does the Set have this value?
            
            mySet.delete(i);    // True ->  delete
        }
        
        else{
            mySet.add(i);     // False -> add
        }
        
        
    }
    
    return Array.from(mySet)[0];  // Create a copy instance array and put value in first index 
};


// input -> [2,2,1]
// output -> 1

// input -> [2,2,4,3,3]
// output -> 4



//Other solutions
/*
- List Operation:
Algorithm

 1.   Iterate over all the elements in nums\text{nums}nums
 2.   If some number in nums\text{nums}nums is new to array, append it
 3.   If some number is already in the array, remove it

- Hash Table:

  1.  Iterate through all elements in nums and set up key/value pair.
  2.  Return the element which appeared only once.

- Math:

2∗(a+b+c)−(a+a+b+b+c)=c

-Bit Manipulation:

If we take XOR of zero and some bit, it will return that bit
a⊕0=aa \oplus 0 = aa⊕0=a
If we take XOR of two same bits, it will return 0
a⊕a=0a \oplus a = 0a⊕a=0
a⊕b⊕a=(a⊕a)⊕b=0⊕b=ba \oplus b \oplus a = (a \oplus a) \oplus b = 0 \oplus b = ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b

So we can XOR all bits together to find the unique number.



*/
