
""" TEXT 
Jenny has written a function that returns a greeting for a user. 
However, she's in love with Johnny, and would like to greet him slightly different. 
She added a special case to her function, but she made a mistake.
"""


def greet(name):
    return "Hello, {name}!".format(name=name)
    if name == "Johnny":
        return "Hello, my love!"    #before --> see first condition is wrong because the value access inside when it executes  


def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    else:  
        return "Hello, {name}!".format(name=name) #after


#Other solutions:
"""
def greet(name):
    if name != 'Johnny':
        return "Hello, {name}!".format(name=name)
    else:
        return "Hello, my love!"

def greet(name):
    return "Hello, {name}!".format(name = ('my love' if name == 'Johnny' else name));
"""
