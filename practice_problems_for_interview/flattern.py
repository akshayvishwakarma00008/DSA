def flattern_list(lst):
    flat_lst = []
    for item in lst:
        if isinstance(item, list):
            flat_lst.extend(flattern_list(item))
        else:
            flat_lst.append(item)
        
    return flat_lst

print(flattern_list([1, [2, [3, 4], 5], 6]))