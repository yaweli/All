#
#
# socket manupulation
# e.s.
#

import http.client

class GetUrl():
    dom=None
    cgi=None
    conn=None
    def open(uuu):
        vec=uuu.split("/")
        dom=vec[2]    #http://dom/cgi
        cgi=""
        for i in range(3,len(vec)):
            cgi+="/"+vec[i]
        print("dom="+dom)
        print("url="+url)
        conn = http.client.HTTPSConnection(dom)
        conn.request("GET", cgi)
        r1 = conn.getresponse()
        print(r1.status, r1.reason)
        return r1

    def read():
        data1 = r1.read()
        return data1

    def close():
        conn.close()