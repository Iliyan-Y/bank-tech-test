# Set Up

- npm install
- to see the test coverage npm test
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

# Challenge approach

I've started with one class of a Bank and TDD doing the most simples tests first and building on top of that. Soon I realized that having another class for the transactions will be good idea and it will help to keep the bank class clear. When the main functionality of the app was ready, I've added the helper methods responsible for formatting the date and the amount in the required way. Finally I've refracture and extracted few more helper methods to keep my code DRY and readable.

## Photo example

![appExample](https://raw.githubusercontent.com/Iliyan-Y/bank-tech-test/main/appExample.png)
