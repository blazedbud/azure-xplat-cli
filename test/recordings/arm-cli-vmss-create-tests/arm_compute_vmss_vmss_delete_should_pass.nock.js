// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestVMSSCreate4329/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/4ec29bc0-f945-4fad-bf7c-2f187c897032?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/4ec29bc0-f945-4fad-bf7c-2f187c897032?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '4ec29bc0-f945-4fad-bf7c-2f187c897032',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'e13b4a69-647e-47b5-8bc9-c78532ffbcb6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081341Z:e13b4a69-647e-47b5-8bc9-c78532ffbcb6',
  date: 'Tue, 16 Aug 2016 08:13:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/4ec29bc0-f945-4fad-bf7c-2f187c897032?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:13:40.9637941+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"4ec29bc0-f945-4fad-bf7c-2f187c897032\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': 'f68d05a4-b37f-48f4-b16b-5186f658cc45',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': 'a90edffa-3b51-43d0-8d41-49b36d781869',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081412Z:a90edffa-3b51-43d0-8d41-49b36d781869',
  date: 'Tue, 16 Aug 2016 08:14:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/4ec29bc0-f945-4fad-bf7c-2f187c897032?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:13:40.9637941+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"4ec29bc0-f945-4fad-bf7c-2f187c897032\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '4f3f9e2a-cb9d-4250-91e7-3f973f34b1a1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': '52cca1b0-da20-4b25-8593-5a44f73612f8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081444Z:52cca1b0-da20-4b25-8593-5a44f73612f8',
  date: 'Tue, 16 Aug 2016 08:14:43 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/4ec29bc0-f945-4fad-bf7c-2f187c897032?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:13:40.9637941+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"4ec29bc0-f945-4fad-bf7c-2f187c897032\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '8095e5b5-8be4-4bb0-805e-c3d25b811d17',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': 'bd924d16-c6a7-4858-bd83-4ca0c9344f84',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081515Z:bd924d16-c6a7-4858-bd83-4ca0c9344f84',
  date: 'Tue, 16 Aug 2016 08:15:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/4ec29bc0-f945-4fad-bf7c-2f187c897032?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:13:40.9637941+00:00\",\r\n  \"endTime\": \"2016-08-16T08:15:32.8082734+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"4ec29bc0-f945-4fad-bf7c-2f187c897032\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '5070938c-c35f-4e19-afa4-b44b1d5dd334',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '45b06281-10de-4956-b9d3-f5b43c070e23',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081546Z:45b06281-10de-4956-b9d3-f5b43c070e23',
  date: 'Tue, 16 Aug 2016 08:15:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestVMSSCreate4329/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/a85d7753-5dbc-4a3a-806a-7e2dd7339b98?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/a85d7753-5dbc-4a3a-806a-7e2dd7339b98?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': 'a85d7753-5dbc-4a3a-806a-7e2dd7339b98',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '50361172-d41c-46f8-a6c3-3ecd91270bad',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081548Z:50361172-d41c-46f8-a6c3-3ecd91270bad',
  date: 'Tue, 16 Aug 2016 08:15:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/a85d7753-5dbc-4a3a-806a-7e2dd7339b98?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:15:47.6677376+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a85d7753-5dbc-4a3a-806a-7e2dd7339b98\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': 'e8b2e301-a766-4be4-8221-f2360f25c34d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '78436dd4-157c-46f5-ad57-a8c8f33bfcbe',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081619Z:78436dd4-157c-46f5-ad57-a8c8f33bfcbe',
  date: 'Tue, 16 Aug 2016 08:16:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/a85d7753-5dbc-4a3a-806a-7e2dd7339b98?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:15:47.6677376+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a85d7753-5dbc-4a3a-806a-7e2dd7339b98\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '9bd99406-74d1-4251-b976-74eb9bc57c64',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': 'e4b2c145-8039-43eb-a762-53166923d759',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081650Z:e4b2c145-8039-43eb-a762-53166923d759',
  date: 'Tue, 16 Aug 2016 08:16:50 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/a85d7753-5dbc-4a3a-806a-7e2dd7339b98?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:15:47.6677376+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"a85d7753-5dbc-4a3a-806a-7e2dd7339b98\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '5701b417-b229-4bdd-ad43-dc2caa55bf4a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '9e8664a1-6e55-4c81-8ab1-f1ec1ac86c6a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081722Z:9e8664a1-6e55-4c81-8ab1-f1ec1ac86c6a',
  date: 'Tue, 16 Aug 2016 08:17:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/a85d7753-5dbc-4a3a-806a-7e2dd7339b98?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:15:47.6677376+00:00\",\r\n  \"endTime\": \"2016-08-16T08:17:49.3872447+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"a85d7753-5dbc-4a3a-806a-7e2dd7339b98\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '144f7451-9a52-4966-9712-e84b8c16883d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '02a790c0-5e49-42ab-87d5-29918ac9d8ab',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T081753Z:02a790c0-5e49-42ab-87d5-29918ac9d8ab',
  date: 'Tue, 16 Aug 2016 08:17:52 GMT' });
 return result; }]];
