// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname5169376393893464?comp=lease')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  etag: '"0x8D3C27C781234C4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ad2432ca-0001-003f-2465-f421db000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': '633e7d74-5522-49ae-9f9f-64a860dd00ab',
  date: 'Fri, 12 Aug 2016 06:47:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname5169376393893464?comp=lease')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  etag: '"0x8D3C27C781234C4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ad2432ca-0001-003f-2465-f421db000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': '633e7d74-5522-49ae-9f9f-64a860dd00ab',
  date: 'Fri, 12 Aug 2016 06:47:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname5169376393893464')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3C27C781234C4"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ba9ede70-0001-002b-5c65-f4e2bf000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Fri, 12 Aug 2016 06:47:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname5169376393893464')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3C27C781234C4"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ba9ede70-0001-002b-5c65-f4e2bf000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Fri, 12 Aug 2016 06:47:17 GMT',
  connection: 'close' });
 return result; }]];