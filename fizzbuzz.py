#!/usr/bin/python


def fizzbuzz():
    x = 0
    for i in range(1, 1000):
        if divisible_by_3(i) or divisible_by_5(i):
            x += i
    return x

def divisible_by_3(x):
    n = x % 3
    return n == 0

def divisible_by_5(y):
    n = y % 5
    return n == 0
