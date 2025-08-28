def fibbonacci_series(n):
    n1=0
    n2=1
    n3=0

    if n == 0:
        print(n1)
    if n == 1:
        print(n1)
        print(n2)
    else:
        print(n1)
        print(n2)
        s = 2
        while s < n:
            n3 = n1+n2
            print(n3)
            n1=n2
            n2=n3
            s+=1

fibbonacci_series(8)