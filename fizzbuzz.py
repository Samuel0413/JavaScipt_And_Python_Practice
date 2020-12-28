import sys

def fizzbuzz():
    inputs = sys.argv[1:]
    for input in inputs:
        input = int(input)
        if input % 3 == 0 and input % 5 == 0:
            print("fizzbuzz")
        elif input % 3 == 0:
            print("fizz")
        elif input % 5 == 0:
            print("buzz")
        else:
            print(input)

fizzbuzz()