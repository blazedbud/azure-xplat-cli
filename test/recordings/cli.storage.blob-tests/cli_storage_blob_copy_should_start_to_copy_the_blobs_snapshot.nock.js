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
  .put('/testblobcopysource/toCopy?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:48:27 GMT',
  etag: '"0x8D3C27CA9FFA3AD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f23e8483-0001-002c-1965-f4143a000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-08-12T06:48:31.3260329Z',
  date: 'Fri, 12 Aug 2016 06:48:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopysource/toCopy?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:48:27 GMT',
  etag: '"0x8D3C27CA9FFA3AD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f23e8483-0001-002c-1965-f4143a000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-08-12T06:48:31.3260329Z',
  date: 'Fri, 12 Aug 2016 06:48:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Fri, 12 Aug 2016 06:48:26 GMT',
  etag: '"0x8D3C27CA9B3430C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ba9f36b8-0001-002b-2965-f4e2bf000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:48:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Fri, 12 Aug 2016 06:48:26 GMT',
  etag: '"0x8D3C27CA9B3430C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ba9f36b8-0001-002b-2965-f4e2bf000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:48:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:48:32 GMT',
  etag: '"0x8D3C27CAD1AF807"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'daf255d3-0001-0016-7365-f45799000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': 'bab150e8-cbef-4bc3-bfae-62b7a9c68d55',
  'x-ms-copy-status': 'success',
  date: 'Fri, 12 Aug 2016 06:48:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:48:32 GMT',
  etag: '"0x8D3C27CAD1AF807"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'daf255d3-0001-0016-7365-f45799000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': 'bab150e8-cbef-4bc3-bfae-62b7a9c68d55',
  'x-ms-copy-status': 'success',
  date: 'Fri, 12 Aug 2016 06:48:33 GMT',
  connection: 'close' });
 return result; }]];