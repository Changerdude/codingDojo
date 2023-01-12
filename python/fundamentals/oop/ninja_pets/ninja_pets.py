from ninja import Ninja
from pet import Pet,Dog

ninja1 = Ninja("Kurt","Jeffries", "wishbones","kibble",Dog("Jake","growl at delivery people"))

ninja1.feed().walk().bathe()

ninja1.pet.bark()