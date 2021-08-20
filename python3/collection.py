#
#
# kic (c) 2020 , utility collection
#
print("Top ")

# file open
st=open("file.txt")
line=st.readline()
st.close()
# or
with open('loc.csv') as f:
   for line in f:
       print(line)
f.close


#
# call to http url
#
import http.client
# h4 = http.client.HTTPConnection('www.python.org', 80, timeout=10)
conn = http.client.HTTPSConnection("www.python.org")
conn.request("GET", "/")
r1 = conn.getresponse()
print(r1.status, r1.reason)
# 200 OK
data1 = r1.read()
conn.close()
print(f"Http data = {data1} ")

#
# dictionary (hash table) , not sorted
# 
dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First','aaa':0}
print(dict)
# show only keys
dict.keys()
# one item
print(dict['Name'])
# Multi level Hash
dict = {'Name': 'Zara', 'zindex':20, 'Age': 7, 'Class': 'First','aaa':0 , 'bbb': {'has1':11,'hash2':22 , 'has3':{'age':33,'Name':'benny'}},'a-index':200}
print(dict['bbb']['has3']['Name'])
# Hash table sorted
print("sorted():")
for x in sorted(dict.keys()):
    print(f" {x} : {dict[x]}")

# listen to http request
#
# classes
#
class Customer:
    istate0 = 1
    # constructor
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def f(self):
        return 'hello world'
x = Customer("moshe",34)
x.f()
print(x.istate0)
print(x.name)
print(x.age)

#
# internal database , sql for python
#
import sqlite3 as sl
con = sl.connect('my-test.db')
print(con)
#with con:
#    con.execute("""
#        CREATE TABLE USER (
#            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
#            name TEXT,
#            age INTEGER
#        );
#    """)
last=0
with con:
    a=con.execute("select * from USER;")
    for row in a:
        print(row)
        last=row[0]
with con:
    con.execute(f"INSERT INTO USER (id, name, age) values({last+1}, 'eli', 32)")

#
#
# generators
def nextOne():
    yield "NL"
    yield "IL"
    yield "US"
for x in nextOne():
    print(x)
#


