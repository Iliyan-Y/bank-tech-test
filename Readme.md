# Set Up

- open SpecRunner.html -> will show the test results
- while SpecRunner.html is open right click and inspect the page to open the console tab
- in the console tap create new account "let account = new Bank()"
- to deposit account.deposit(any amount you wish)
- to withdraw account.withdraw(any amount you wish)
- to print all the activity account.printStatement()

# Code structure

- The bank class is responsible for all the functions connected to the account.
- The transaction class is responsible to store all of the details for the current transaction
- The bank statement is storing all of the transactions made in the account

## Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.

- Account statement (date, amount, balance) printing.

- Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
