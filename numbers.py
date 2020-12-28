import sys

first_number = float(sys.argv[1])
second_number = float(sys.argv[2])

result_sum = first_number + second_number
result_difference = first_number - second_number
result_product = first_number * second_number
result_quotient = first_number / second_number if second_number != 0 else 0
#print("{first_number} plus {second_number} equals {result_sum}".format(**locals()))