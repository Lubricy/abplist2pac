var FindProxyForURL = function (url, host) {
 
// If the hostname matches, send direct.
    if (shExpMatch(url, "*baidu.com*"))
        return "PROXY localhost:1";
 
    return "DIRECT";
 
}
