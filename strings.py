import sys
try:
    input_string = str(sys.argv[1])
    output_string = input_string.upper()
    print(output_string + "!!!")
except:
    print("ERROR!!")


