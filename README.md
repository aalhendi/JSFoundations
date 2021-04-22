# Task

In this task, you'll create a calculator that has two numbers and an operation, and the calculator will perform the operation on those two numbers.

You'll create an **integer** variable that contains the _first number_, another **integer** variable that contains the _second number_, and a third **string** variable that contains the _operation_.

Example, the two numbers could be `3` and `5`, and the operation could be `"+"`, then the calculator will add `3` and `5`, and print to the console `3 + 5 = 8`.

This is an example of what your terminal should look like:

    ```
    Please enter the first number: 5
    Please enter the second number: 7
    Please choose the operation (+, -, /, *): *

    ---------------

    5 * 7 = 35
    ```
    
## Setup

In your terminal, make sure you're inside the task directory and run `yarn install`.

## Steps:
 
2. In `calculator.js`, ask the user for two numbers and operation using the `prompt` method we provided.
3. Validate user input.
   - If the user's inputs were not numbers, print to the user that the numbers were invalid. For example if the user enters letters instead of numbers.
   - Hint: Prompt will give you the value as a string, hmmm what should we do?
   - If the operation the user entered was not any of the options (`+`, `-`, `*`, or `/`), print to the user that the operation is not valid.
4. If the user entered valid numbers and a valid operation, perform the calculation and print it to the user.

# Submission

To submit your work, simply push your code to GitHub.

## Steps

After finishing the task and verifying your work, follow these steps to push your code to GitHub:

1. Navigate to project root (where `calculator.js` is).
2. Run the command `git add .`
3. Run `git commit -m "Solved the Conditionals task"`.
4. Push to GitHub: `git push`.
