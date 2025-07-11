"""
Swap without third variable
"""

def swap(a,b):
    print(f"Original variables -> a - {a} , b - {b} ")
    a , b = b , a
    print(f"Swapped variables -> a - {a} , b - {b} ")

swap(5, 10)