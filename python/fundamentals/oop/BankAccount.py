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

acc1 = BankAccount()
acc2 = BankAccount(.25, 10000)

acc1.deposit(50).deposit(500).deposit(23).withdraw(400).yield_interest().display_account_info()
acc2.deposit(25).deposit(25).withdraw(300).withdraw(500).withdraw(1000).withdraw(5000).yield_interest().display_account_info()

BankAccount.all_accounts()
