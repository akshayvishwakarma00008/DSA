def capitalize_first_letter(str):
    lst = str.split(' ')
    transformed_string = ''
    for word in lst:
        first_letter = word[0:1].upper()
        transformed_word = first_letter+word[1:]
        transformed_string += transformed_word
    
    print(f"Transformaed string - {transformed_string}")

capitalize_first_letter('akshay vishwakarma')