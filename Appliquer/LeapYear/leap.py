def isDivisibleBy400(year):
    if year % 400 == 0:
        return True
    return False

def isDivisibleBy100(year):
    if year % 100 == 0:
        return True
    return False

def isDivisibleBy4(year):
    if year % 4 == 0:
        return True
    return False

def isLeapYear(year):
    if isDivisibleBy100(year) == True and isDivisibleBy400(year) == False:
        return False

    if isDivisibleBy4(year) == False:
        return False
    return True