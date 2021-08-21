# class from other file
# exmample
##########################

from class2 import *

print("start test class from other file, class2.py")
one=Customers("eli","052-33333")
ttt=one.tot()
print(f"total is={ttt}")
ttt=one.tot()
print(f"total is={ttt}")
ttt=one.tot()
print(f"total is={ttt}")
ttt=one.tot()
print(f"total is={ttt}")
#
#
print("end")
#
#
print("test class inherent")
eli=Peuple("moshe","050-66666")
print(eli.tot())
print(eli.tot())
print("end")
