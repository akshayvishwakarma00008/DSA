class anagram():
    def is_anagram(str1,str2):
        sorted_s1 = ''.join(sorted(str1)).lower()
        sorted_s2 = ''.join(sorted(str2)).lower()

        if sorted_s1 == sorted_s2:
            print("Anagram")
        else:
            print("Not an Anagram")

    def group_anagram(lst):
        anagram_dict = {}
        grouped_list = []
        for word in lst:
            sorted_word = ''.join(sorted(word))
            if sorted_word in anagram_dict:
                anagram_dict[sorted_word].append(word)
            else:
                anagram_dict[sorted_word] = [word]

        for val in anagram_dict.values():
            grouped_list.append(val)
        
        print("grouped anagram",grouped_list)

# anagram.is_anagram('hello', 'ehllo')
anagram.group_anagram(["bat", "tab", "cat", "act"])