#pour lancer pytest dans le terminal : pytest test_leap.py
import leap as script

def test_divisibleBy400():
    year = 2000
    assert script.isDivisibleBy400(year) == True

def test_notDivisibleBy400():
    year = 2020
    assert script.isDivisibleBy400(year) == False

def test_divisibleBy100ButNot400():
    year = 1700
    assert script.isDivisibleBy100(year) == True
    assert script.isDivisibleBy400(year) == False

def test_divisibleBy100():
    year = 1700
    assert script.isDivisibleBy100(year) == True

def test_notDivisibleBy100():
    year = 1701
    assert script.isDivisibleBy100(year) == False

def test_divisibleBy4():
    year = 2000
    assert script.isDivisibleBy100(year) == True

def test_notDivisibleBy4():
    year = 525
    assert script.isDivisibleBy100(year) == False


def test_isLeap():
    assert script.isLeapYear(2020) == True
    assert script.isLeapYear(2008) == True
    assert script.isLeapYear(2012) == True
    assert script.isLeapYear(2016) == True
    assert script.isLeapYear(2000) == True


def test_isNotLeap():
    assert script.isLeapYear(3) == False
    assert script.isLeapYear(2017) == False
    assert script.isLeapYear(2018) == False
    assert script.isLeapYear(2019) == False
    assert script.isLeapYear(1700) == False
    assert script.isLeapYear(1800) == False
    assert script.isLeapYear(1900) == False
