def sorted_arr(arr):
    for i in range(0,len(arr)):
        for j in range(i+1,len(arr)):
            if arr[i] > arr[j]:
                temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp

arr = [5,2,1,0]
sorted_arr(arr)

print(arr)