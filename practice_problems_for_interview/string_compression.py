def string_compression(s):
    my_dict ={}
    new_str=""

    for ch in s:
        if ch in my_dict:
            my_dict[ch]+=1
        else:
            my_dict[ch]=1

    for key, value in my_dict.items():
        new_str += key
        new_str += str(value)

    return new_str

print(string_compression('aaabbcccccd'))

    
