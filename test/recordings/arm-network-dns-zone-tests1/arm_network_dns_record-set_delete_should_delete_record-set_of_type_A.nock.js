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
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/A/set-a?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"01472857-78c9-4569-8aed-4780ce481099\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":255,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: '01472857-78c9-4569-8aed-4780ce481099',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '34a93c69-485d-4263-bdbe-27aac6f347b9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '904f957c-eeee-44b7-b434-1e29b1c08d2d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111931Z:904f957c-eeee-44b7-b434-1e29b1c08d2d',
  date: 'Fri, 27 Jan 2017 11:19:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/A/set-a?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"01472857-78c9-4569-8aed-4780ce481099\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":255,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: '01472857-78c9-4569-8aed-4780ce481099',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '34a93c69-485d-4263-bdbe-27aac6f347b9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '904f957c-eeee-44b7-b434-1e29b1c08d2d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111931Z:904f957c-eeee-44b7-b434-1e29b1c08d2d',
  date: 'Fri, 27 Jan 2017 11:19:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/A/set-a?api-version=2016-04-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fe2da56b-e02f-4ca1-b28a-0bb6584e084a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '58c0bebe-b22c-4fc3-b3d2-80e4f2479480',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111932Z:58c0bebe-b22c-4fc3-b3d2-80e4f2479480',
  date: 'Fri, 27 Jan 2017 11:19:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/A/set-a?api-version=2016-04-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fe2da56b-e02f-4ca1-b28a-0bb6584e084a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '58c0bebe-b22c-4fc3-b3d2-80e4f2479480',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111932Z:58c0bebe-b22c-4fc3-b3d2-80e4f2479480',
  date: 'Fri, 27 Jan 2017 11:19:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/A/set-a?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-a' does not exist in resource group 'xplat-test-dns-zone-record-set3088' of subscription '2c224e7e-3ef5-431d-a57b-e71f4662e3a6'.\"}", { 'cache-control': 'private',
  'content-length': '185',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '875f69e5-680a-4f1a-9633-381adbbca455',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '240db68f-b4a4-47b8-b5aa-ea085b86e258',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111933Z:240db68f-b4a4-47b8-b5aa-ea085b86e258',
  date: 'Fri, 27 Jan 2017 11:19:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/A/set-a?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-a' does not exist in resource group 'xplat-test-dns-zone-record-set3088' of subscription '2c224e7e-3ef5-431d-a57b-e71f4662e3a6'.\"}", { 'cache-control': 'private',
  'content-length': '185',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '875f69e5-680a-4f1a-9633-381adbbca455',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '240db68f-b4a4-47b8-b5aa-ea085b86e258',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111933Z:240db68f-b4a4-47b8-b5aa-ea085b86e258',
  date: 'Fri, 27 Jan 2017 11:19:33 GMT',
  connection: 'close' });
 return result; }]];