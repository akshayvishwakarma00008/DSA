def reverse_list(lst):
    reversed_list = []
    n = len(lst)
    i = n-1
    while i >= 0:
        reversed_list.append(lst[i])
        i-=1
    
    print(f"reversed list - {reversed_list}")

reverse_list([1,2,3,4,5])