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
  .put('/storage-cli-blob-test/blockblobname5169376393893464?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  etag: '"0x8D3C27C781234C4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b5378920-0001-001b-6465-f4b895000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-08-12T06:47:10.4007805Z',
  date: 'Fri, 12 Aug 2016 06:47:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname5169376393893464?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  etag: '"0x8D3C27C781234C4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b5378920-0001-001b-6465-f4b895000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-08-12T06:47:10.4007805Z',
  date: 'Fri, 12 Aug 2016 06:47:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname5169376393893464?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  etag: '"0x8D3C27C781234C4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '92755ec8-0001-002e-4265-f416c0000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-08-12T06:47:10.9748107Z',
  date: 'Fri, 12 Aug 2016 06:47:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname5169376393893464?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  etag: '"0x8D3C27C781234C4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '92755ec8-0001-002e-4265-f416c0000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-08-12T06:47:10.9748107Z',
  date: 'Fri, 12 Aug 2016 06:47:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname5169376393893464?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  etag: '"0x8D3C27C781234C4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7a01c539-0001-0042-6165-f4bd13000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-08-12T06:47:11.5448418Z',
  date: 'Fri, 12 Aug 2016 06:47:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname5169376393893464?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  etag: '"0x8D3C27C781234C4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7a01c539-0001-0042-6165-f4bd13000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-08-12T06:47:11.5448418Z',
  date: 'Fri, 12 Aug 2016 06:47:11 GMT',
  connection: 'close' });
 return result; }]];