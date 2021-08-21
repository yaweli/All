#
#
# socket manupulation
# e.s.
#

import http.client

class GetUrl:
    def __init__(self,uuu):
        i=0
        print(f"point==={++i}")
        vec=uuu.split("/")
        dom=vec[2]    #http://dom/cgi
        cgi=""
        for i in range(3,len(vec)):
            cgi+="/"+vec[i]
        print("dom="+dom)
        print("url="+uuu)
        conn = http.client.HTTPSConnection(dom)
        conn.request("GET", cgi)
        self.r1 = conn.getresponse()
        print(self.r1.status, self.r1.reason)
    def ans(self):
        return self.r1