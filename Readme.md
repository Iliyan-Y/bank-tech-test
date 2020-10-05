# Set Up

- open SpecRunner.html -> will show the test results
- while SpecRunner.html is open right click and inspect the page to open the console tab
- in the console tap create new account "let account = new Bank()"
- to deposit account.deposit(any amount you wish)
- to withdraw account.withdraw(any amount you wish)
- to print all the activity account.printStatement()

# Code structure

- Because the bank is dealing with the customers. The bank class is responsible for all the functions connected to the account.
- Because each transaction is unique. The transaction class is responsible to store all of the details for the current transaction
- Because all of the transactions belongs to one account. The bank is storing all of the transactions made in the account.

## Photo example

![appExample]('./appExample.png')
