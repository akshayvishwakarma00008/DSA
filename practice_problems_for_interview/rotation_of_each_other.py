def rotion_of_each_other(str1,str2):
    return len(str1) == len(str2) and str2 in (str1+str2)

print(rotion_of_each_other('abcde','cdeab'))
print(rotion_of_each_other('abcde','abced'))
print(rotion_of_each_other('waterbottle','erbottlewat'))
print(rotion_of_each_other('rotation','tationro'))