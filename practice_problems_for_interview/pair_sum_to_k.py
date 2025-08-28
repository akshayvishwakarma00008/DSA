def sum_of_pair(lst, k):
    pair_list = []
    for i in range(0,len(lst)-1):
        for j in range(i+1, len(lst)):
            if (lst[i]+lst[j]) == k :
                pair_list.append([lst[i],lst[j]])

    print("pair list", pair_list)

sum_of_pair([1,2,3,4,5],5)
