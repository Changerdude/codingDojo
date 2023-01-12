class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 100

    def sleep(self):
        print(f"{self.name} is sleeping")
        self.energy += 25
        return self
    
    def eat(self):
        print(f"{self.name} is eating")
        self.energy += 5
        self.health += 10
        return self

    def play(self):
        print(f"{self.name} is playing")
        self.health += 5
        return self

    def noise(self):
        print(f"{self.name} is making a strange noise!")

class Dog(Pet):
    def __init__(self, name, tricks):
        super().__init__(name, "Dog", tricks)

    def bark(self):
        print("This is a weak use of inheritance o.O")