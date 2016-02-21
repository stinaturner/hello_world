#!/usr/bin/python

from fizzbuzz import fizzbuzz


def fivetimes(string):
    for i in range(5):
        print string


def fivetimeslist(x):
    z = []
    for i in range(5):
        z.append(x)
    return z


def fivetimesdictionary(x):
    n = {}
    for i in range(5):
        n[str(i)] = x
    return n


def main():
    x = 'hello world'
    fivetimes(7)
    fivetimes(x)
    y = 'butt'
    fivetimes(y)
    b = fivetimeslist('fart')
    b[2] = 'boner'
    print b
    c = fivetimesdictionary('shart')
    c['3'] = 'booger'
    print c
    print fizzbuzz(1000)


if __name__ == '__main__':
    main()
