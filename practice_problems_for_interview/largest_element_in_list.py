def largest_element(lst):
    max=0
    for val in lst:
        if val > max:
            max = val

    print(f"the largest element in the list is - {max}")

largest_element([2,1,5,2,7,10])