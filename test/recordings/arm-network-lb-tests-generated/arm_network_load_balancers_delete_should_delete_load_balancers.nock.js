// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"a0060488-8401-44f1-9e1c-35504a8282c5\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e6ce7d51-1d85-41a1-afba-8c6d903d9e8c\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '681',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a0060488-8401-44f1-9e1c-35504a8282c5"',
  'x-ms-request-id': 'f2441c89-2b3c-4f21-b76b-220e2d5cbbf2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '9241b2e7-91e7-4083-9198-e73d35f3c270',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075819Z:9241b2e7-91e7-4083-9198-e73d35f3c270',
  date: 'Fri, 01 Sep 2017 07:58:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"a0060488-8401-44f1-9e1c-35504a8282c5\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e6ce7d51-1d85-41a1-afba-8c6d903d9e8c\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '681',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a0060488-8401-44f1-9e1c-35504a8282c5"',
  'x-ms-request-id': 'f2441c89-2b3c-4f21-b76b-220e2d5cbbf2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '9241b2e7-91e7-4083-9198-e73d35f3c270',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075819Z:9241b2e7-91e7-4083-9198-e73d35f3c270',
  date: 'Fri, 01 Sep 2017 07:58:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/fa1a7cec-6438-4201-a032-338ed589dbe1?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'fa1a7cec-6438-4201-a032-338ed589dbe1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/fa1a7cec-6438-4201-a032-338ed589dbe1?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'bfcb730e-3417-4b9f-8f84-d68c025f0a1a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075821Z:bfcb730e-3417-4b9f-8f84-d68c025f0a1a',
  date: 'Fri, 01 Sep 2017 07:58:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/fa1a7cec-6438-4201-a032-338ed589dbe1?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'fa1a7cec-6438-4201-a032-338ed589dbe1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/fa1a7cec-6438-4201-a032-338ed589dbe1?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'bfcb730e-3417-4b9f-8f84-d68c025f0a1a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075821Z:bfcb730e-3417-4b9f-8f84-d68c025f0a1a',
  date: 'Fri, 01 Sep 2017 07:58:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/fa1a7cec-6438-4201-a032-338ed589dbe1?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aa64aa9b-3691-432c-b0a3-738c14df70f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '62648671-6bf9-45a3-b921-e70b4c372787',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075854Z:62648671-6bf9-45a3-b921-e70b4c372787',
  date: 'Fri, 01 Sep 2017 07:58:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/fa1a7cec-6438-4201-a032-338ed589dbe1?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aa64aa9b-3691-432c-b0a3-738c14df70f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '62648671-6bf9-45a3-b921-e70b4c372787',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075854Z:62648671-6bf9-45a3-b921-e70b4c372787',
  date: 'Fri, 01 Sep 2017 07:58:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/loadBalancerName' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '8fa68663-3b5f-4e77-9d02-6f291aec25cf',
  'x-ms-correlation-request-id': '8fa68663-3b5f-4e77-9d02-6f291aec25cf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075856Z:8fa68663-3b5f-4e77-9d02-6f291aec25cf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 07:58:55 GMT',
  connection: 'close',
  'content-length': '165' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/loadBalancerName' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '8fa68663-3b5f-4e77-9d02-6f291aec25cf',
  'x-ms-correlation-request-id': '8fa68663-3b5f-4e77-9d02-6f291aec25cf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075856Z:8fa68663-3b5f-4e77-9d02-6f291aec25cf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 07:58:55 GMT',
  connection: 'close',
  'content-length': '165' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers?api-version=2017-09-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': 'b5c07d70-8bd6-4aa6-879c-67fb0c5042bd',
  'x-ms-correlation-request-id': 'b5c07d70-8bd6-4aa6-879c-67fb0c5042bd',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075857Z:b5c07d70-8bd6-4aa6-879c-67fb0c5042bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 07:58:56 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers?api-version=2017-09-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': 'b5c07d70-8bd6-4aa6-879c-67fb0c5042bd',
  'x-ms-correlation-request-id': 'b5c07d70-8bd6-4aa6-879c-67fb0c5042bd',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075857Z:b5c07d70-8bd6-4aa6-879c-67fb0c5042bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 07:58:56 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; }]];