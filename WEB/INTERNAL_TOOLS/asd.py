import random
posibilidades = [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,3]
multiplicador = posibilidades[random.randint(0,len(posibilidades)-1)]
print(multiplicador)