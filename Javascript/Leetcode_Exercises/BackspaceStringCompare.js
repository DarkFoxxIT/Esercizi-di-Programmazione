/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let subS = [];
    let subT = [];     //Create two stack empty 
    
    for(let s = 0; s < S.length; s++){  
        if(S[s] === "#"){          //Check if the string contains "#"
            subS.pop();            //True -> delete char before
        }      
        else{           
            subS.push(S[s])       //False -> add inside stack
        }
    }   
    for(let t = 0; t < T.length; t++){        
           if(T[t] === "#"){      
            subT.pop();          
        }      
        else{          
            subT.push(T[t])
        }
    }  
    subS = subS.join("");  // array -> string 
    subT = subT.join("");    
    return subS === subT;  // === operator checks if the arrays have the same object reference
    
};

