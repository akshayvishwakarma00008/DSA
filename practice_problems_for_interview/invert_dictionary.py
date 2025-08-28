class dictionary_problems():
    def invert_dict():
        dictionary ={"a": 1, "b": 2}
        rev_dic = {}
        for key, val in dictionary.items():
            rev_dic[val]=key

        print(f"reversed dictionary - {rev_dic}")

    def update_dictionary():
        dic1 = {"a": 1, "b": 2}
        dic2 = {"c": 1, "d": 2}

        dic1.update(dic2)
        print("Updated Dictionary - ", dic1)

# dictionary_problems.invert_dict()
dictionary_problems.update_dictionary()
