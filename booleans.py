import sys

python_is_glorious = True
failure_is_option = False
proper_greeting = False
inputs = sys.argv
if len(inputs) >= 2:
    proper_greeting = True if inputs[1] == "For the glory of Python!" else False