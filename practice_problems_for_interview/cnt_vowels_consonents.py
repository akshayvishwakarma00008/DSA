def count_vowel_consonent(str):
    vowel=0
    consonent=0
    for ch in str:
        if ch in ('a','e','i','o','u','A','E','I','O','U'):
            vowel+=1
        else:
            consonent+=1

    print(f"count of vowel - {vowel} and count of consonent - {consonent}")

count_vowel_consonent('helloworld')
