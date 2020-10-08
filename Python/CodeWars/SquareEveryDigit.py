"""
-TEXT-

You are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

"""


def square_digits(num):
    k = 1                                                         #split in a single digit number 
    res = [] # store inside a list
    converted_num = str(num)                                      #convert into string 
    for idx in range(0,len( converted_num),1):
        res.append(pow(int(converted_num[idx: idx + k]),2))       # for each number digit excute pow of 2 
    result = int("".join([str(i) for i in res]))                  # concat in a single number 
    return result



#Other solutions:

"""

def square_digits(num):
    ret = ""
    for x in str(num):
        ret += str(int(x)**2)
    return int(ret)
    
    
    
def square_digits(num):
  return int(''.join([str(int(x)**2) for x in list(str(num))]))
"""
