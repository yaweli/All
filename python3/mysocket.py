#
#
# socket manupulation
# e.s.
#

import urllib3

class GetUrl:
    def __init__(self,uuu):
        http = urllib3.PoolManager()
        self.resp = http.request("GET", uuu)
    def data(self):
        return self.resp.data

'''
resp = http.request(
    "POST",
    "https://httpbin.org/post",
    fields={"hello": "world"} #  Add custom form fields
)

'''