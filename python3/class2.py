#
#
# the class file
# class from other file example
##################################
class Customers:
    def __init__(self,name,number):
        self.cname=name
        self.cnumber=number
        self.total=1
    def tot(self):  # return amount of time you all to this fun
        self.total+=1
        return self.total



# inherent class example
#
#################################
class Peuple(Customers):
    def rename(self,name,number):
        self.cname="new"+name
        self.cnumber="new "+number