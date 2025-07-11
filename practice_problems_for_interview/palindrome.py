class Palindrom():
    def is_palindrome(str):
        rev = str[::-1]
        if rev == str:
            print("String is palindrome")
        else:
            print("the string is not a palindrome")

Palindrom.is_palindrome("madame")