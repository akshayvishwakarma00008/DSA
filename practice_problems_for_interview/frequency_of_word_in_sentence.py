def frequencty(str):
    freq_dict = {}
    lst = str.split(' ')
    for word in lst:
        if word in freq_dict:
            freq_dict[word] += 1
        else:
            freq_dict[word] = 1

    print("word frequecy - ", freq_dict)

frequencty('hello hello world test test test one two three')