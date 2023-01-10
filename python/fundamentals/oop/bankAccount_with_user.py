class BankAccount:

    accounts = []

    def __init__(self, int_rate = .05, balance = 0): 
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance < amount:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
        return self

    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        return self
    
    @classmethod
    def all_accounts(cls):
        for acc in cls.accounts:
            acc.display_account_info()

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accounts = [BankAccount(int_rate=0.02, balance=0)]

    def add_account(self, int_rate, balance):
        self.accounts.append(BankAccount(int_rate, balance))
        return self

    def make_deposit(self, amount, acc_num=0):
        self.accounts[acc_num].deposit(amount)
        return self

    def make_withdrawl(self, amount, acc_num=0):
        self.accounts[acc_num].withdraw(amount)
        return self

    def display_user_balance(self):
        for acc in self.accounts:
            acc.display_account_info()
        return self

    def transfer_money(self, amount, other_user, acc_num=0):
        self.accounts[acc_num].withdraw(amount)
        other_user.accounts[0].deposit(amount)
        return self


user1 = User("Kurt", "123@gmail.com")
user2 = User("Denji", "makima@gmail.com")
print("User 1")
user1.make_deposit(500).add_account(.5,1000).display_user_balance()
print("User 2")
user2.make_deposit(1000).display_user_balance().transfer_money(500,user1).display_user_balance()
print("User 1")
user1.display_user_balance()