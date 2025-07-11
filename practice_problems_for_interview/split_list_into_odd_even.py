def split_list_into_odd_even(lst):
    even_list =[x for x in lst if x%2 == 0]
    odd_list =[x for x in lst if x%2 != 0]

    print("odd list -", odd_list)
    print("even list -", even_list)

split_list_into_odd_even([1,2,3,4,5,6,7,8,0])