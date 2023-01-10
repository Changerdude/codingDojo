# x = [ [5,2,3], [10,8,9] ] 
# students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]

# x[1][0] = 15
# students[0]["last_name"] = "Bryant"
# sports_directory["soccer"][0] = "Andres"
# z[0]["y"] = 30

# print(x)
# print(students)
# print(sports_directory)
# print(z)

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(incommingList):
    for item in incommingList:
        output = []
        for key,val in item.items():
            output.append(f"{key} - {val}")
        print(f"{output[0]}, {output[1]}")

iterateDictionary(students)
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

def iterateDictionary2(incommingKey, incommingList):
    for item in incommingList:
        print(item[incommingKey])

iterateDictionary2("first_name", students)
iterateDictionary2("last_name", students)

def printInfo(incommingDict):
    for key,val in incommingDict.items():
        print(f"{len(val)} {key.upper()}")
        for item in val:
            print(item)

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)
