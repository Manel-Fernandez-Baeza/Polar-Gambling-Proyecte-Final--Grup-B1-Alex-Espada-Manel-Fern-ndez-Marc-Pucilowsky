import mysql.connector as mariadb
import random
database = mariadb.connect(
  host="localhost",
  user="root",
  password="",
  database="Polar"
)

cursor = database.cursor()
def Ruleta(x):
  x = int(input("Introduce cuantas apuestas quieres meter: "))
  for x in range(x):
    posibilidades = [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,3]
    posibilidadesVictoria = [0,0,0,0,0,0,0,1,1,1]
    resultado = posibilidadesVictoria[random.randint(0,len(posibilidadesVictoria)-1)]
    bet = random.randint(10,10000)
    betResult = 0
    if resultado == 1:
      multiplicador = posibilidades[random.randint(0,len(posibilidades)-1)]
      if multiplicador == 0:
        mult = 1.5
        betResult = bet*1.5
      elif multiplicador == 1:
        betResult = bet*3
        mult = 3
      elif multiplicador == 2:
        betResult = bet*5
        mult = 5
      elif multiplicador == 3:
        betResult = bet*10
        mult = 3
      else:
        print("Algo anda mal")
    else:
      betResult = 0-bet
      mult = 0
    Query = "INSERT INTO Ruleta_Stats(UserID,BetValue,Result,Multiplicator,BetFinal) Values(%s,%s,%s,%s,%s)"
    valores = (IdUser,bet,resultado,float(mult),betResult)
    cursor.execute(Query,valores)
    print(f"Usuario {UserName(IdUser)}, ha {resultado} apostando {bet} puntos, ha multiplicado por {mult} y a actualizado con {betResult}")
    database.commit()
    print(cursor.rowcount)

def UserName(id):
  Query = f"SELECT Username FROM Users WHERE ID = {id}"
  cursor.execute(Query)
  resultado = cursor.fetchall()
  for x in resultado:
    return str(x[0])


if __name__ == "__main__":
  IdUser = int(input("Introduce el ID del usuario con el que vamos a actuar\n"))
  print("USUARIO: "+ UserName(IdUser))
  print("Bienvenido al gestor interno (FakeAdd) de PolarGambling")
  print("-------------------------------------------------------")
  leave = False
  while leave != True:
    print("Que Deseas Hacer?")
    op = int(input("1 = Añadir Datos Ruleta\n9 = Cambiar ID usuario\n0 = Salir\n" ))
    if op == 1:
      Ruleta(IdUser)
    elif op == 9:
      IdUser = int(input("Selecciona nueva ID\n"))
      print("USUARIO: "+ UserName(IdUser))
    elif op == 0:
      leave = True
      

  