// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '1bf890dd-ee1e-45b8-a870-34e6279ffaba',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'MSDN Subscription',
    registeredProviders: ['website', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;TableEndpoint=http://yaxiatest.table.by3.azure-test.net/;QueueEndpoint=http://yaxiatest.queue.by3.azure-test.net/;FileEndpoint=http://yaxiatest.file.by3.azure-test.net/;BlobEndpoint=https://yaxiatest.blob.by3.azure-test.net/;AccountName=yaxiatest;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('http://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '65c02296-0001-0015-5637-65acd8000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '65c02296-0001-0015-5637-65acd8000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fee38563-0002-0011-0e37-655806000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4d0d9c16-0003-000c-7637-65cb04000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:20 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6894a2ac-0001-0004-5437-65d2cf000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6894a2ac-0001-0004-5437-65d2cf000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:22 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6c468cc0-0002-0002-2737-655cfe000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:23 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a2840dd2-0003-0013-0137-6522e9000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:23 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '27eac992-0001-000b-5937-65f8c2000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '27eac992-0001-000b-5937-65f8c2000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.blob.by3.azure-test.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3aa45a10-0001-0000-4f37-652611000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://yaxiatest.blob.by3.azure-test.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3aa45a10-0001-0000-4f37-652611000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0660441e-0001-0010-3137-65e5f1000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0660441e-0001-0010-3137-65e5f1000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:28 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b4d3df93-0002-000a-0137-654535000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.by3.azure-test.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e9360ab6-0002-0006-3737-65a820000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '10971443-0002-0009-0237-65822d000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:29 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>false</Write><Delete>false</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0500618c-0003-000b-0d37-65f8c2000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'dc5acece-0003-0010-1037-65e5f1000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '65d612b0-0003-0012-1a37-659f1e000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:33 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '96a56fe9-0001-000d-4937-6576f3000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '96a56fe9-0001-000d-4937-6576f3000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4286b492-0002-0008-2937-653fda000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9bcc9836-0003-0006-5237-65a820000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:35 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'dc10b4ea-0001-000a-1b37-654535000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'dc10b4ea-0001-000a-1b37-654535000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:37 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b7fda75f-0002-0004-3037-65d2cf000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:39 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '24b11ef8-0003-0002-6437-655cfe000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:39 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '223fb823-0001-0013-6f37-6522e9000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '223fb823-0001-0013-6f37-6522e9000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.blob.by3.azure-test.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f697c693-0001-0009-5d37-65822d000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://yaxiatest.blob.by3.azure-test.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f697c693-0001-0009-5d37-65822d000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'aa204d94-0001-000f-1437-650c1c000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://yaxiatest.blob.by3.azure-test.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'aa204d94-0001-000f-1437-650c1c000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:46 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0208f9e0-0002-0000-3937-652611000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:47 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.by3.azure-test.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '43f7fd2d-0002-0007-7237-6515d7000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>false</IncludeAPIs><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd1d5cae7-0002-000b-4937-65f8c2000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:48 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'dc5acf2c-0003-0010-5e37-65e5f1000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:49 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c8b5525e-0003-0001-5e37-659be6000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '82aef885-0003-0016-7437-656bc0000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:53 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7bf96730-0003-000e-6937-65b1eb000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9bcc985a-0003-0006-6437-65a820000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.queue.by3.azure-test.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0c45fd20-0003-000a-1837-654535000000',
  'x-ms-version': '2015-02-21',
  date: 'Mon, 23 Mar 2015 07:05:57 GMT' });
 return result; }]];