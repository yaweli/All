# try url
from mysocket import GetUrl



Hsocket=GetUrl("https://www.ynetnews.com/category/3089")
ans=Hsocket.data()
print(ans)