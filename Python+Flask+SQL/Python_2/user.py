Class User:

    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)

    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    def set_salary(self, new_salary):
        # changes employee's salary
        # employee salaries are a minimum of 40,000 and
        # cap at 200,000
        if (type(new_salary) == int):
            if (new_salary > 40000 and new_salary < 200000):
                self.salary = new_salary

    
# let's create an instance of Employee
new_employee = Employee("Aaron", "Jackson", 81000)
new_employee2 = Employee("Bethany", "Smith", 87000)
new_employee3 = Employee("Chad", "Adamsson", 54000)

# change new_employee's salary to 86000
# new_employee.salary = 86000 - we can do this but we shouldn't
print(new_employee.salary)
new_employee.set_salary(860000)
print(new_employee.salary)
new_employee.set_salary(86000)
print(new_employee.salary)
new_employee.set_salary("81000")
print(new_employee.salary)
# employees = [new_employee, new_employee2, new_employee3]

# for employee in employees:
#     print(f"{employee.full_name()}")
# Footer
# © 2022 GitHub, Inc.
# Footer navigation
# Terms
# Privacy
# Security
# Status
# D


class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        # your code here
    def withdraw(self, amount):
        # your code here
    def display_account_info(self):
        # your code here
    def yield_interest(self):
        # your code here
