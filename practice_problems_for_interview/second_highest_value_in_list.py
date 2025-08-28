def second_highest(lst):
    sorted_list = sorted(lst)
    print(f"second highest element in the is - {sorted_list[len(lst)-2]}")

second_highest([3,1,4,6,2,4,5])