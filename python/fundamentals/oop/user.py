class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
    
    def display_info(self):
        print(f"{self.first_name} {self.last_name}")
        print(self.email)
        print(self.age)
        print(f"Is member: {self.is_rewards_member}")
        print(f"Reward points: {self.gold_card_points}")
        return self
    
    def enroll(self):
        if self.is_rewards_member:
            print("User already a member.")
            return False
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
            return True
    
    def spend_points(self, amount):
        if self.gold_card_points < amount:
            print("Not enough points available.")
            return False
        else:
            self.gold_card_points -= amount
            return True

user1 = User("Kurt", "Jeffries", "32", "123@gmail.com")
user1.enroll()
user1.spend_points(50)
user2 = User("Ippo", "Makunouchi", "16", "gazzell@gmail.com")
user2.enroll()
user2.spend_points(80)
user3 = User("Denji", "Uhhh", "?", "makimaplease@gmail.com")
user1.display_info()
user2.display_info()
user3.display_info()
user1.enroll()
user3.spend_points(40)