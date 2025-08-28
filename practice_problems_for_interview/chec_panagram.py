import string
def check_panagram(sentence):
    alphabets = set(string.ascii_lowercase)
    return set(sentence.lower()) >= alphabets

print(check_panagram('hello word this is test'))