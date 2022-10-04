class BankAccount:
    accounts = []

    def __init__(self, irate, balance, name):
        self.irate = irate
        self.balance = balance
        self.name = name
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        print(f"Your new balance is: {self.balance}")
        return self

    def withdraw(self, amount):
        self.balance -= amount
        print(f"Your new balance is: {self.balance}")
        return self

    def display_account_info(self):
        print("Your Interest Rate is: ", self.irate)
        print("Your Balance is: ", self.balance)
        return self

    def yield_interest(self):
        print(f"Your Interest Rate is: {self.irate}")
        self.balance = (self.irate * self.balance)
        print(f"Your balance is: {self.balance}")
        return self 
    
    @classmethod
    def account_balance(cls):
        print("The following data is a summary of bank account information:")
        for account in cls.accounts:
            print(f"Name: {account.name} Balance: {account.balance}")

Ryan = BankAccount(0.1, 9000, "Ryan")

Morgan = BankAccount(0.3, 2000, "Morgan")

Ryan.deposit(1000).deposit(2000).deposit(3000).withdraw(4000).yield_interest().display_account_info()

Morgan.deposit(10000).deposit(5000).withdraw(1000).withdraw(1000).withdraw(1000).withdraw(1000).yield_interest().display_account_info()

BankAccount.account_balance()