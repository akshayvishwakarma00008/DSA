def rotate_list(lst,k):
    if k > len(lst):
        print("rotation not possible")
        return
    
    rotated_list = []
    left_list = lst[0:k]
    right_list = lst[k:]

    rotated_list.extend(right_list+left_list)

    print("rotated list", rotated_list)

rotate_list([1,2,3,4,5],3)
    