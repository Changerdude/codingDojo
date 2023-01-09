def countdown(start):
    countList = []
    while start >= 0:
        countList.append(start)
        start -= 1
    return countList

print(countdown(5))

def printAndReturn(incommingList = [0,0]):
    print(incommingList[0])
    return incommingList[1]

print(printAndReturn([2,5]))

def firstPlusLength(incommingList = []):
    return incommingList[0] + len(incommingList)

print(firstPlusLength([1,2,3,4,5]))

def valueGreaterThanSecond(incommingList = []):
    newList = []
    if incommingList:
        if len(incommingList) < 2:
            return False
        else:
            for i in incommingList:
                if incommingList[i] > incommingList[1]:
                    newList.append(incommingList[i])
        print(len(newList))
        if len(newList)<2:
            return False
        else:
            return newList

print(valueGreaterThanSecond([5]))

def thisLengthThatValue(a,b):
    newList = []
    for x in range(a):
        newList.append(b)
    return newList

print(thisLengthThatValue(4,7))