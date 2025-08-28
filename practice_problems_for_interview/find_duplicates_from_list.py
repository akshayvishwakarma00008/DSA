def find_duplicates(lst):
    dict_list = {}
    duplicates = []
    for x in lst:
        if x in dict_list:
            dict_list[x] += 1
        else:
            dict_list[x] = 1
    
    for key in dict_list.keys():
        if dict_list[key] > 1:
            duplicates.append(key)

    print("duplicates - ", duplicates)


find_duplicates([1,2,3,4,5,6,7,2,1,4])