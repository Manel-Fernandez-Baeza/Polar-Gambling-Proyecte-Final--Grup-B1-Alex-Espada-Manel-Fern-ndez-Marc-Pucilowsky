import mysql.connector as mariadb
import matplotlib.pyplot as plt
database = mariadb.connect(
  host="localhost",
  user="root",
  password="",
  database="Polar"
)

cursor = database.cursor()

def UserName(id):
  Query = f"SELECT Username FROM Users WHERE ID = {id}"
  cursor.execute(Query)
  resultado = cursor.fetchall()
  for x in resultado:
    return str(x[0])


def General_WoLPercentaje_Roulete():
  cursor.execute(f"SELECT count(*) FROM Ruleta_Stats")
  Total_Number = cursor.fetchall()[0][0]
  cursor.execute(f"SELECT count(*) FROM Ruleta_Stats WHERE result = 1")
  Win_Number = cursor.fetchall()[0][0]
  cursor.execute(f"SELECT count(*) FROM Ruleta_Stats WHERE result = 0")
  Lose_Number = cursor.fetchall()[0][0]

  # Creation of the graphic
  Win_Percentaje = round(float(Win_Number * 100 / Total_Number),2)
  percentajes = [Win_Percentaje,100-Win_Percentaje]
  x= ["W","L"]
  y = [Win_Number,Lose_Number]
  plt.bar(x,y)
  plt.ylim(0,Total_Number)
  plt.title(f"Win Or Lose Percentaje General")
  
  for i in range(len(y)):
    plt.text(i, percentajes[i]+1, str(percentajes[i])+'%')
  plt.show()

def SinglePerson_WoLPercentage_Roulete(iduser):
    Username = UserName(iduser)
    cursor.execute(f"SELECT count(*) FROM Ruleta_Stats WHERE UserID = {iduser}")
    Total_Number = cursor.fetchall()[0][0]
    cursor.execute(f"SELECT count(*) FROM Ruleta_Stats WHERE UserID = {iduser} AND result = 1")
    Win_Number = cursor.fetchall()[0][0]
    cursor.execute(f"SELECT count(*) FROM Ruleta_Stats WHERE UserID = {iduser} AND result = 0")
    Lose_Number = cursor.fetchall()[0][0]

    
    # Creation of the graphic
    Win_Percentaje = round(float(Win_Number * 100 / Total_Number),2)
    percentajes = [Win_Percentaje,100-Win_Percentaje]
    x= ["W","L"]
    y = [Win_Number,Lose_Number]
    plt.bar(x,y)
    plt.ylim(0,Total_Number)
    plt.title(f"Win Or Lose Percentaje {Username}")

    for i in range(len(y)):
      plt.text(i, percentajes[i]+1, str(percentajes[i])+'%')
    plt.show()
    
if __name__ == "__main__":
    while True:
      a = int(input("Escoje 1. Single Person, 2. General "))
      if a == 1:
        b = int(input("ID: "))
        SinglePerson_WoLPercentage_Roulete(b)
      elif a == 2:
        General_WoLPercentaje_Roulete()
