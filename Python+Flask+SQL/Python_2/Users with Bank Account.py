class BankAccount:

    accounts = []

    def __init__(self, irate =.02, balance =0):
        self.irate = irate
        self.balance = balance
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
        print("Your Balance is: {self.balance}")
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

class User:

    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(irate=0.02, balance=0)

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self

    def make_withdraw(self, amount):
        self.account.withdraw(amount)
        return self
    
    def display_user_balance(self):
        self.account.display_account_info()

Ryan = User("Ryan", "ryanlawrence@gmail.com")
Ryan.make_deposit(1000000).make_withdraw(11111)
Ryan.display_user_balance

