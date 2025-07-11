class Prime_Numbers():
    def prime_number_generator(n):
        if n == 0 or n == 1:
            print("No prime number in the given range")
        if n == 2:
            print(2)
        else:
            print(2)
            for i in range(3,n):
                is_prime = True

                for j in range(2,(i//2)+1):
                    if i%j == 0:
                        is_prime = False
                        break

                if is_prime:
                    print(i)

    def prime_numbers_in_range(m,n):
        if m == 0 and n == 1:
            print("No prime number in the given range")
        if (m==0 and n==2) or (m==1 and n==2):
            print(2)
        else:
            for i in range(m,n):
                if i == 1:
                    continue
                is_prime = True
                for j in range(2,(i//2)+1):
                    if i%j == 0:
                        is_prime = False
                        break
                
                if is_prime:
                    print(i)



# Prime_Numbers.prime_number_generator(6)
Prime_Numbers.prime_numbers_in_range(1,100)

