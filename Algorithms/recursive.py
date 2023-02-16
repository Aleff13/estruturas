base = 10
value = 1

def recursiveFunction(value):
    #caso base
    if(base <= value):
        print("finalizou")
        return

    value = value + 1
    print("mais uma vez")
    recursiveFunction(value)

recursiveFunction(value)