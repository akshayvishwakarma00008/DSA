def calculate_running_sum(lst):
    sum_list = []
    sum = 0
    for val in lst:
        sum = val+sum
        sum_list.append(sum)

    print(sum_list)

calculate_running_sum([1,2,3,4])