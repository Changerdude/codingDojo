num1 = 42 #variable declaration Number
num2 = 2.3 #variable declaration Number
boolean = True #variable declaration Boolean
string = 'Hello World' #variable declaration String
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration initialize List
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration initialize Dictionary
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration initialize Tuple
print(type(fruit)) #log statement check type
print(pizza_toppings[1]) #log statement access list value
pizza_toppings.append('Mushrooms') #list add value
print(person['name']) #log statement Dictionary access value
person['name'] = 'George' #Dictionary change value
person['eye_color'] = 'blue' #Dictionary add value
print(fruit[2]) #Tuple access value

if num1 > 45: #conditional if
    print("It's greater") #Log statement 
else: #condidtional else
    print("It's lower")#Log statement 

if len(string) < 5: #conditional if
    print("It's a short word!")#Log statement 
elif len(string) > 15: #conditional else if
    print("It's a long word!")#Log statement 
else:#condidtional else
    print("Just right!")#Log statement 

for x in range(5): #for loop start
    print(x)#Log statement 
for x in range(2,5):#for loop start
    print(x)#Log statement 
for x in range(2,10,3):#for loop start
    print(x)#Log statement 
x = 0 #variable decleration
while(x < 5):#while loop start
    print(x)#Log statement 
    x += 1#while loop increment

pizza_toppings.pop()#List delete value
pizza_toppings.pop(1)#List delete value

print(person)#Log statement 
person.pop('eye_color')#Dictionary delete value
print(person)#Log statement 

for topping in pizza_toppings:#For loop start
    if topping == 'Pepperoni':#conditional if
        continue #for loop continue
    print('After 1st if statement')#Log statement 
    if topping == 'Olives':#conditional if
        break #for loop break

def print_hello_ten_times(): #function 
    for num in range(10):#for loop start
        print('Hello')#Log statement 

print_hello_ten_times()#function call

def print_hello_x_times(x):#function with paramaeter
    for num in range(x):#for loop start
        print('Hello')#Log statement 

print_hello_x_times(4)#function call with args

def print_hello_x_or_ten_times(x = 10):#function with paramaeter with default value
    for num in range(x):#for loop start
        print('Hello')#Log statement 

print_hello_x_or_ten_times()#function call without args
print_hello_x_or_ten_times(4)#function call with args


"""
Bonus section
"""

# print(num3) #NameError num3 not defined
# num3 = 72 #variable declaration
# fruit[0] = 'cranberry' #TypeError: 'tuple' object does not support item assignment
# print(person['favorite_team']) #KeyError: 'favorite_team' doesnt exist
# print(pizza_toppings[7]) #IndexError: list index out of range
#   print(boolean) #IndentationError: unexpected indent
# fruit.append('raspberry') #AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1) #AttributeError: 'tuple' object has no attribute 'pop'