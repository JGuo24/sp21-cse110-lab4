## Part 1A

1: values added: 20
2: final result: 20
3: values added: 20
4: error: result is declared in the if block and DNE outside of it.
5: values added: 0
6: final result: 0

## Part 1B

1: 3 will be printed because we used the keyword var for i, which means that i will still hold the value 3 after we have completed the for loop. 

2: 150 will be printed because the keyword var is used for discountedPrice and it holds the value that was last used, which in this case, was 300 * .5 = 150

3: 150 will also be printed because the keyword var is used for finalPrice and it holds the value that was last put in it, which in this case, is the new rounded price.

4: the function takes in an array and a number between 0 and 1 to return an array similar to the input, but with the values discounted by the other input number.

5: error: i does not exist after the for loop ends

6: error: discountedPrice does not exist after the for loop ends

7: 150 will be printed because finalPrice is declared outside of the for loop, meaning that it still exists with the value that was last put into the variable.  

8: the function takes in an array and a number between 0 and 1 to return an array similar to the input, but with the values discounted by the other input number.

9: error: i still does not exist after the for loop ends

10: 3 is printed: length is a const and is set to 3 at the beginning and exists within the method, not the for loop

11: array length 3 of [50,50,50].  Because discountedPrice is type const, it's value is not changed after the first time we change it, so 50 is pushed 3 times to discounted.  Discounted is allowed to change because the reference itself is not being modified.

12: 
A: student.name
B: student['Grad Year']
C: student.greeting()
D: student['Favorite Teacher'].name
E: student.courseLoad[0]

13:
A: 32 : integer mapped to exact string rep
B: 1 : '3' maps to integer representation
C: 3 : null is 0
D: 3null : '3' is mapped to string representation
E: 4 : true maps to 1
F: 0 : false maps to 0 and null maps to 0
G: 3undefined : 3 maps to string representation
H: NaN : 3 maps to normal integer representation, 3 - und = not a number

14:
A: true: '2' maps to integer representation
B: false: '2' and '12' map to string representation, alphabethically 1 is less than 2
C: true: '2' maps to integer representation
D: false: strict equality comparison operator: string and integer are not equal
E: false: true maps to 1
F: true: Boolean(2) converts to true, and these are both the same

15: == checks if the operands are the same by converting one to the other.  === is strict equality and checks if those two values are the same or not (values not converted before comparison)

17: Result is [2,4,6].  when we call modifyArray, we jump to the modifyarray method with the callback oSomething, which is the other method we are going to call later.  We step into the array and call doSomething on each element in the array, which multiplies the value of the input by 2, and store it into a new array that is returned later.  

19: 1432