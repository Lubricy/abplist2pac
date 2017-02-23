var ABPFilterParser = require('abp-filter-parser')
var rule = require('./fixt/easylistchina+easylist.txt')

var blackhole = "PROXY 127.0.0.1:65535";

let parsedFilterData = {};

ABPFilterParser.parse(rule, parsedFilterData);

module.exports = function FindProxyForURL(url, host) {
  // If the hostname matches, send direct.
  if (ABPFilterParser.matches(parsedFilterData, url, {
    domain: host,
    elementTypeMaskMap: ABPFilterParser.elementTypes.SCRIPT,
  })){
    return blackhole + url + host;
  } else {
    return "DIRECT";
  }
}
