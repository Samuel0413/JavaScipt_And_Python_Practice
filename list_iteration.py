import sys

inputs = sys.argv[1:]

for index, input in enumerate(inputs, start=1):
    print(f"{index}. {input}")