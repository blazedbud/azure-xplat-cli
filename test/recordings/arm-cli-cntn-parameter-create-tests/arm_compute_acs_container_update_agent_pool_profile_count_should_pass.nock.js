// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'cffbd00f-9edf-41f9-8f74-4a6ec260dcb8',
    name: 'VM Depot Main Subscription',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'australiasoutheast';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer4527?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"id\": \"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer4527\",\r\n  \"name\": \"xplatContainer4527\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"australiasoutheast\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer4527master\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer4527a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer4527a2\",\r\n        \"osType\": \"Linux\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"MIIDszCCApugAwIBAgIJALBV9YJCF/tAMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\\r\\naWRnaXRzIFB0eSBMdGQwHhcNMTUwMzIyMjI1NDQ5WhcNMTYwMzIxMjI1NDQ5WjBF\\r\\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\\r\\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIB\\r\\nCAKCAQEAxDC+OfmB+tQ+P1MLmuuW2hJLdcK8m4DLgAk5l8bQDNBcVezt+bt/ZFMs\\r\\nCHBhfTZG9O9yqMn8IRUh7/7jfQm6DmXCgtxj/uFiwT+F3out5uWvMV9SjFYvu9kJ\\r\\nNXiDC2u3l4lHV8eHde6SbKiZB9Jji9FYQV4YiWrBa91j9I3hZzbTL0UCiJ+1PPoL\\r\\nRx/T1s9KT5Wn8m/z2EDrHWpetYu45OA7nzyIFOyQup5oWadWNnpk6HkCGutl9t9b\\r\\ncLdjXjXPm9wcy1yxIB3Dj/Y8Hnulr80GJlUtUboDm8TExGc4YaPJxdn0u5igo5gZ\\r\\nc6qnqH/BMd1nsyICx6AZnKBXBycoSQIBI6OBpzCBpDAdBgNVHQ4EFgQUzWhrCCDs\\r\\nClANCGlKZ64rHp2BDn0wdQYDVR0jBG4wbIAUzWhrCCDsClANCGlKZ64rHp2BDn2h\\r\\nSaRHMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQK\\r\\nExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGSCCQCwVfWCQhf7QDAMBgNVHRMEBTAD\\r\\nAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQCUaJnX0aBzwBkbJrBS5YvkZnNKLdc4oHgC\\r\\n/Nsr/9pwXzFYYXkdqpTw2nygH0C0WuPVVrG3Y3EGx/UIGDtLbwMvZJhQN9mZH3oX\\r\\n+c3HGqBnXGuDRrtsfsK1ywAofx9amZfKNk/04/Rt3POdbyD1/AOADw2zMokbIapX\\r\\n+nMDUtD/Tew9+0qU9+dcFMrFE1N4utlrFHlrLFbiCA/eSegP6gOeu9mqZv7UHIz2\\r\\noe6IQTw7zJF7xuBIzTYwjOCM197GKW7xc4GU4JZIN+faZ7njl/fxfUNdlqvgZUUn\\r\\nkfdrzU3PZPl0w9NuncgEje/PZ+YtZvIsnH7MLSPeIGNQwW6V2kc8\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://6jk4gwprxu3dodiag0.blob.core.windows.net/\"\r\n      }\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2474',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': 'a7b3f4b5-e8a0-4a93-838d-739f06d582ce',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '26573f32-1a18-431e-a396-7368c39b71ef',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120559Z:26573f32-1a18-431e-a396-7368c39b71ef',
  date: 'Wed, 01 Jun 2016 12:05:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer4527?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"id\": \"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer4527\",\r\n  \"name\": \"xplatContainer4527\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"australiasoutheast\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer4527master\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer4527a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer4527a2\",\r\n        \"osType\": \"Linux\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"MIIDszCCApugAwIBAgIJALBV9YJCF/tAMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\\r\\naWRnaXRzIFB0eSBMdGQwHhcNMTUwMzIyMjI1NDQ5WhcNMTYwMzIxMjI1NDQ5WjBF\\r\\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\\r\\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIB\\r\\nCAKCAQEAxDC+OfmB+tQ+P1MLmuuW2hJLdcK8m4DLgAk5l8bQDNBcVezt+bt/ZFMs\\r\\nCHBhfTZG9O9yqMn8IRUh7/7jfQm6DmXCgtxj/uFiwT+F3out5uWvMV9SjFYvu9kJ\\r\\nNXiDC2u3l4lHV8eHde6SbKiZB9Jji9FYQV4YiWrBa91j9I3hZzbTL0UCiJ+1PPoL\\r\\nRx/T1s9KT5Wn8m/z2EDrHWpetYu45OA7nzyIFOyQup5oWadWNnpk6HkCGutl9t9b\\r\\ncLdjXjXPm9wcy1yxIB3Dj/Y8Hnulr80GJlUtUboDm8TExGc4YaPJxdn0u5igo5gZ\\r\\nc6qnqH/BMd1nsyICx6AZnKBXBycoSQIBI6OBpzCBpDAdBgNVHQ4EFgQUzWhrCCDs\\r\\nClANCGlKZ64rHp2BDn0wdQYDVR0jBG4wbIAUzWhrCCDsClANCGlKZ64rHp2BDn2h\\r\\nSaRHMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQK\\r\\nExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGSCCQCwVfWCQhf7QDAMBgNVHRMEBTAD\\r\\nAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQCUaJnX0aBzwBkbJrBS5YvkZnNKLdc4oHgC\\r\\n/Nsr/9pwXzFYYXkdqpTw2nygH0C0WuPVVrG3Y3EGx/UIGDtLbwMvZJhQN9mZH3oX\\r\\n+c3HGqBnXGuDRrtsfsK1ywAofx9amZfKNk/04/Rt3POdbyD1/AOADw2zMokbIapX\\r\\n+nMDUtD/Tew9+0qU9+dcFMrFE1N4utlrFHlrLFbiCA/eSegP6gOeu9mqZv7UHIz2\\r\\noe6IQTw7zJF7xuBIzTYwjOCM197GKW7xc4GU4JZIN+faZ7njl/fxfUNdlqvgZUUn\\r\\nkfdrzU3PZPl0w9NuncgEje/PZ+YtZvIsnH7MLSPeIGNQwW6V2kc8\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://6jk4gwprxu3dodiag0.blob.core.windows.net/\"\r\n      }\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2474',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': 'a7b3f4b5-e8a0-4a93-838d-739f06d582ce',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '26573f32-1a18-431e-a396-7368c39b71ef',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120559Z:26573f32-1a18-431e-a396-7368c39b71ef',
  date: 'Wed, 01 Jun 2016 12:05:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '3f3877d1-bff4-4942-9404-07a850fb2f5e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': '997c5355-8499-450b-b475-27acf7b74d47',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120630Z:997c5355-8499-450b-b475-27acf7b74d47',
  date: 'Wed, 01 Jun 2016 12:06:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '3f3877d1-bff4-4942-9404-07a850fb2f5e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': '997c5355-8499-450b-b475-27acf7b74d47',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120630Z:997c5355-8499-450b-b475-27acf7b74d47',
  date: 'Wed, 01 Jun 2016 12:06:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': 'a6e55775-edaa-41c7-a412-bf89749b2dae',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-correlation-request-id': '589d36c7-60d0-455f-bb2d-1911800a5dac',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120700Z:589d36c7-60d0-455f-bb2d-1911800a5dac',
  date: 'Wed, 01 Jun 2016 12:07:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': 'a6e55775-edaa-41c7-a412-bf89749b2dae',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-correlation-request-id': '589d36c7-60d0-455f-bb2d-1911800a5dac',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120700Z:589d36c7-60d0-455f-bb2d-1911800a5dac',
  date: 'Wed, 01 Jun 2016 12:07:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '184c64f2-bb14-4cb7-877d-b8420bcc2b12',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14868',
  'x-ms-correlation-request-id': '23822471-1338-4b09-9a85-acd08e9ce555',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120731Z:23822471-1338-4b09-9a85-acd08e9ce555',
  date: 'Wed, 01 Jun 2016 12:07:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '184c64f2-bb14-4cb7-877d-b8420bcc2b12',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14868',
  'x-ms-correlation-request-id': '23822471-1338-4b09-9a85-acd08e9ce555',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120731Z:23822471-1338-4b09-9a85-acd08e9ce555',
  date: 'Wed, 01 Jun 2016 12:07:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '70fd2a10-fae1-4c8f-ba80-bb78cd09268e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': '33690a3c-1ff4-475d-b642-6de21f5f5104',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120802Z:33690a3c-1ff4-475d-b642-6de21f5f5104',
  date: 'Wed, 01 Jun 2016 12:08:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '70fd2a10-fae1-4c8f-ba80-bb78cd09268e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': '33690a3c-1ff4-475d-b642-6de21f5f5104',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120802Z:33690a3c-1ff4-475d-b642-6de21f5f5104',
  date: 'Wed, 01 Jun 2016 12:08:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '45538b31-d742-4546-b3e2-c86c0c847da4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': 'ef62a816-0b1d-4a1b-b16d-0e4f33dfd56f',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120834Z:ef62a816-0b1d-4a1b-b16d-0e4f33dfd56f',
  date: 'Wed, 01 Jun 2016 12:08:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '45538b31-d742-4546-b3e2-c86c0c847da4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': 'ef62a816-0b1d-4a1b-b16d-0e4f33dfd56f',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120834Z:ef62a816-0b1d-4a1b-b16d-0e4f33dfd56f',
  date: 'Wed, 01 Jun 2016 12:08:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"endTime\": \"2016-06-01T12:08:46.9134394+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '03467647-47fc-426b-b21c-093e1abfe169',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': 'b1311034-c0ac-4de2-a6f1-449ffc34ea58',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120904Z:b1311034-c0ac-4de2-a6f1-449ffc34ea58',
  date: 'Wed, 01 Jun 2016 12:09:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/a7b3f4b5-e8a0-4a93-838d-739f06d582ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:05:58.7488261+00:00\",\r\n  \"endTime\": \"2016-06-01T12:08:46.9134394+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"a7b3f4b5-e8a0-4a93-838d-739f06d582ce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '03467647-47fc-426b-b21c-093e1abfe169',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': 'b1311034-c0ac-4de2-a6f1-449ffc34ea58',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120904Z:b1311034-c0ac-4de2-a6f1-449ffc34ea58',
  date: 'Wed, 01 Jun 2016 12:09:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer4527?api-version=2016-03-30')
  .reply(200, "{\r\n  \"id\": \"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer4527\",\r\n  \"name\": \"xplatContainer4527\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"australiasoutheast\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer4527master\",\r\n      \"fqdn\": \"xplatcontainer4527master.australiasoutheast.cloudapp.azure.com\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer4527a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer4527a2\",\r\n        \"fqdn\": \"xplatcontainer4527a2.australiasoutheast.cloudapp.azure.com\",\r\n        \"osType\": \"Linux\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"MIIDszCCApugAwIBAgIJALBV9YJCF/tAMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\\r\\naWRnaXRzIFB0eSBMdGQwHhcNMTUwMzIyMjI1NDQ5WhcNMTYwMzIxMjI1NDQ5WjBF\\r\\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\\r\\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIB\\r\\nCAKCAQEAxDC+OfmB+tQ+P1MLmuuW2hJLdcK8m4DLgAk5l8bQDNBcVezt+bt/ZFMs\\r\\nCHBhfTZG9O9yqMn8IRUh7/7jfQm6DmXCgtxj/uFiwT+F3out5uWvMV9SjFYvu9kJ\\r\\nNXiDC2u3l4lHV8eHde6SbKiZB9Jji9FYQV4YiWrBa91j9I3hZzbTL0UCiJ+1PPoL\\r\\nRx/T1s9KT5Wn8m/z2EDrHWpetYu45OA7nzyIFOyQup5oWadWNnpk6HkCGutl9t9b\\r\\ncLdjXjXPm9wcy1yxIB3Dj/Y8Hnulr80GJlUtUboDm8TExGc4YaPJxdn0u5igo5gZ\\r\\nc6qnqH/BMd1nsyICx6AZnKBXBycoSQIBI6OBpzCBpDAdBgNVHQ4EFgQUzWhrCCDs\\r\\nClANCGlKZ64rHp2BDn0wdQYDVR0jBG4wbIAUzWhrCCDsClANCGlKZ64rHp2BDn2h\\r\\nSaRHMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQK\\r\\nExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGSCCQCwVfWCQhf7QDAMBgNVHRMEBTAD\\r\\nAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQCUaJnX0aBzwBkbJrBS5YvkZnNKLdc4oHgC\\r\\n/Nsr/9pwXzFYYXkdqpTw2nygH0C0WuPVVrG3Y3EGx/UIGDtLbwMvZJhQN9mZH3oX\\r\\n+c3HGqBnXGuDRrtsfsK1ywAofx9amZfKNk/04/Rt3POdbyD1/AOADw2zMokbIapX\\r\\n+nMDUtD/Tew9+0qU9+dcFMrFE1N4utlrFHlrLFbiCA/eSegP6gOeu9mqZv7UHIz2\\r\\noe6IQTw7zJF7xuBIzTYwjOCM197GKW7xc4GU4JZIN+faZ7njl/fxfUNdlqvgZUUn\\r\\nkfdrzU3PZPl0w9NuncgEje/PZ+YtZvIsnH7MLSPeIGNQwW6V2kc8\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://6jk4gwprxu3dodiag0.blob.core.windows.net/\"\r\n      }\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': 'a4c84e78-f455-4608-8cf6-350e2ef1c448',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': 'ed123f3c-703c-4b06-b1c3-8a450951ce9f',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120905Z:ed123f3c-703c-4b06-b1c3-8a450951ce9f',
  date: 'Wed, 01 Jun 2016 12:09:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer4527?api-version=2016-03-30')
  .reply(200, "{\r\n  \"id\": \"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer4527\",\r\n  \"name\": \"xplatContainer4527\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"australiasoutheast\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer4527master\",\r\n      \"fqdn\": \"xplatcontainer4527master.australiasoutheast.cloudapp.azure.com\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer4527a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer4527a2\",\r\n        \"fqdn\": \"xplatcontainer4527a2.australiasoutheast.cloudapp.azure.com\",\r\n        \"osType\": \"Linux\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"MIIDszCCApugAwIBAgIJALBV9YJCF/tAMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\\r\\naWRnaXRzIFB0eSBMdGQwHhcNMTUwMzIyMjI1NDQ5WhcNMTYwMzIxMjI1NDQ5WjBF\\r\\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\\r\\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIB\\r\\nCAKCAQEAxDC+OfmB+tQ+P1MLmuuW2hJLdcK8m4DLgAk5l8bQDNBcVezt+bt/ZFMs\\r\\nCHBhfTZG9O9yqMn8IRUh7/7jfQm6DmXCgtxj/uFiwT+F3out5uWvMV9SjFYvu9kJ\\r\\nNXiDC2u3l4lHV8eHde6SbKiZB9Jji9FYQV4YiWrBa91j9I3hZzbTL0UCiJ+1PPoL\\r\\nRx/T1s9KT5Wn8m/z2EDrHWpetYu45OA7nzyIFOyQup5oWadWNnpk6HkCGutl9t9b\\r\\ncLdjXjXPm9wcy1yxIB3Dj/Y8Hnulr80GJlUtUboDm8TExGc4YaPJxdn0u5igo5gZ\\r\\nc6qnqH/BMd1nsyICx6AZnKBXBycoSQIBI6OBpzCBpDAdBgNVHQ4EFgQUzWhrCCDs\\r\\nClANCGlKZ64rHp2BDn0wdQYDVR0jBG4wbIAUzWhrCCDsClANCGlKZ64rHp2BDn2h\\r\\nSaRHMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQK\\r\\nExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGSCCQCwVfWCQhf7QDAMBgNVHRMEBTAD\\r\\nAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQCUaJnX0aBzwBkbJrBS5YvkZnNKLdc4oHgC\\r\\n/Nsr/9pwXzFYYXkdqpTw2nygH0C0WuPVVrG3Y3EGx/UIGDtLbwMvZJhQN9mZH3oX\\r\\n+c3HGqBnXGuDRrtsfsK1ywAofx9amZfKNk/04/Rt3POdbyD1/AOADw2zMokbIapX\\r\\n+nMDUtD/Tew9+0qU9+dcFMrFE1N4utlrFHlrLFbiCA/eSegP6gOeu9mqZv7UHIz2\\r\\noe6IQTw7zJF7xuBIzTYwjOCM197GKW7xc4GU4JZIN+faZ7njl/fxfUNdlqvgZUUn\\r\\nkfdrzU3PZPl0w9NuncgEje/PZ+YtZvIsnH7MLSPeIGNQwW6V2kc8\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://6jk4gwprxu3dodiag0.blob.core.windows.net/\"\r\n      }\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': 'a4c84e78-f455-4608-8cf6-350e2ef1c448',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': 'ed123f3c-703c-4b06-b1c3-8a450951ce9f',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T120905Z:ed123f3c-703c-4b06-b1c3-8a450951ce9f',
  date: 'Wed, 01 Jun 2016 12:09:05 GMT',
  connection: 'close' });
 return result; }]];