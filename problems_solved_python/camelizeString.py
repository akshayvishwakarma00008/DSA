def camelize_sting(str):
    split_string = str.split("-")
    camelize_str = ""
    print(split_string)

    for x in split_string:
        new_str = x[0].upper()+x[1:]
        camelize_str += new_str

    return camelize_str



print(camelize_sting('hello-world'))