// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"c9794cc5-c535-4c32-bf35-ea5fa97db4af\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"94887fe9-eebd-4d8e-a967-db1b6d3aadc7\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/23\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c9794cc5-c535-4c32-bf35-ea5fa97db4af"',
  'x-ms-request-id': 'ae1eccf6-a55b-4c63-a5c9-754211d14f4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14896',
  'x-ms-correlation-request-id': '2df4b2f0-c1bf-47e8-9497-f6ea5f261406',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113414Z:2df4b2f0-c1bf-47e8-9497-f6ea5f261406',
  date: 'Tue, 29 Dec 2015 11:34:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"c9794cc5-c535-4c32-bf35-ea5fa97db4af\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"94887fe9-eebd-4d8e-a967-db1b6d3aadc7\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/23\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c9794cc5-c535-4c32-bf35-ea5fa97db4af"',
  'x-ms-request-id': 'ae1eccf6-a55b-4c63-a5c9-754211d14f4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14896',
  'x-ms-correlation-request-id': '2df4b2f0-c1bf-47e8-9497-f6ea5f261406',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113414Z:2df4b2f0-c1bf-47e8-9497-f6ea5f261406',
  date: 'Tue, 29 Dec 2015 11:34:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"104e91ea-6e21-429a-a559-17f455cc4d37\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"94887fe9-eebd-4d8e-a967-db1b6d3aadc7\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/23\",\r\n        \"10.1.0.0/23\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '659',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '02534626-d5e3-464c-83a8-97a7df934cc9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/02534626-d5e3-464c-83a8-97a7df934cc9?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1162',
  'x-ms-correlation-request-id': '4ba9eb20-f2b3-4b87-9b71-3374d485444a',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113416Z:4ba9eb20-f2b3-4b87-9b71-3374d485444a',
  date: 'Tue, 29 Dec 2015 11:34:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"104e91ea-6e21-429a-a559-17f455cc4d37\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"94887fe9-eebd-4d8e-a967-db1b6d3aadc7\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/23\",\r\n        \"10.1.0.0/23\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '659',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '02534626-d5e3-464c-83a8-97a7df934cc9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/02534626-d5e3-464c-83a8-97a7df934cc9?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1162',
  'x-ms-correlation-request-id': '4ba9eb20-f2b3-4b87-9b71-3374d485444a',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113416Z:4ba9eb20-f2b3-4b87-9b71-3374d485444a',
  date: 'Tue, 29 Dec 2015 11:34:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/02534626-d5e3-464c-83a8-97a7df934cc9?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a203710b-a2f8-4e17-a9cb-e8a8b2e8f527',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14913',
  'x-ms-correlation-request-id': '8fdb8494-3a3b-4922-82b3-2e29a0de7ae5',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113428Z:8fdb8494-3a3b-4922-82b3-2e29a0de7ae5',
  date: 'Tue, 29 Dec 2015 11:34:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/02534626-d5e3-464c-83a8-97a7df934cc9?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a203710b-a2f8-4e17-a9cb-e8a8b2e8f527',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14913',
  'x-ms-correlation-request-id': '8fdb8494-3a3b-4922-82b3-2e29a0de7ae5',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113428Z:8fdb8494-3a3b-4922-82b3-2e29a0de7ae5',
  date: 'Tue, 29 Dec 2015 11:34:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"83ae554f-0a26-4993-90da-9c361a460a31\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"94887fe9-eebd-4d8e-a967-db1b6d3aadc7\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/23\",\r\n        \"10.1.0.0/23\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '660',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"83ae554f-0a26-4993-90da-9c361a460a31"',
  'x-ms-request-id': 'cd2ce934-52bd-47a0-bb07-7019a9f977a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14895',
  'x-ms-correlation-request-id': '31dcde73-3135-421f-896a-2ce0b5329a8a',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113429Z:31dcde73-3135-421f-896a-2ce0b5329a8a',
  date: 'Tue, 29 Dec 2015 11:34:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpLocalNetwork/providers/Microsoft.Network/localNetworkGateways/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"83ae554f-0a26-4993-90da-9c361a460a31\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"94887fe9-eebd-4d8e-a967-db1b6d3aadc7\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/23\",\r\n        \"10.1.0.0/23\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '660',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"83ae554f-0a26-4993-90da-9c361a460a31"',
  'x-ms-request-id': 'cd2ce934-52bd-47a0-bb07-7019a9f977a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14895',
  'x-ms-correlation-request-id': '31dcde73-3135-421f-896a-2ce0b5329a8a',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113429Z:31dcde73-3135-421f-896a-2ce0b5329a8a',
  date: 'Tue, 29 Dec 2015 11:34:29 GMT',
  connection: 'close' });
 return result; }]];
