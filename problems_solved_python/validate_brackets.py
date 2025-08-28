brackets = {
    "(":")",
    "[":"]",
    "{":"}"
}

def validate_brackets(str):
    bracket_arr = list(str)
    print(bracket_arr)
    stack = []
    for x in bracket_arr:
        if x == "(" or x == "[" or x == "{":
            stack.append(x)
        else:
            if x != brackets[stack.pop()]:
                return "Invalid Brackets"
            
    return "Valid" if len(stack) == 0 else "Invalid"

print(validate_brackets("()"));         
print(validate_brackets("()[]{}"));     
print(validate_brackets("(]"));         
print(validate_brackets("({})"));        