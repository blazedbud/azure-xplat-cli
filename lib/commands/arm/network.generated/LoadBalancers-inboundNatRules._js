/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var generatorUtils = require('../../../util/generatorUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var loadBalancers = network.category('lb')
    .description($('Commands to manage load balancers'));
  var inboundNatRules = loadBalancers.category('inbound-nat-rule')
    .description($('Commands to manage inbound nat rules'));

  var defaultProtocol = 'TCP';
  var defaultFrontendPort = '80';
  var defaultBackendPort = '80';
  var defaultIdleTimeoutInMinutes = '4';
  var defaultEnableFloatingIP = 'false';

  inboundNatRules.command('create [resource-group] [lb-name] [name]')
    .description($('Create an inbound nat rule'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat rule'))
    .option('-t, --frontend-ip-name [frontend-ip-name]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-id'))
    .option('-s, --frontend-ip-id [frontend-ip-id]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-name'))
    .option('-p, --protocol [protocol]', $('the transport protocol for the' +
      '\n     endpoint. Possible values are \'Udp\' or \'Tcp\' or \'All.\''))
    .option('-f, --frontend-port [frontend-port]', $('the port for the external endpoint.' +
      '\n     Port numbers for each rule must be unique within the Load Balancer. Acceptable' +
      '\n     values range from 1 to 65534'))
    .option('-b, --backend-port [backend-port]', $('the port used for the internal' +
      '\n     endpoint. Acceptable values range from 1 to 65535'))
    .option('-i, --idle-timeout [idle-timeout]', $('the timeout for the TCP idle' +
      '\n     connection. The value can be set between 4 and 30 minutes. The default value is' +
      '\n     4 minutes. This element is only used when the protocol is set to TCP'))
    .option('-e, --enable-floating-ip [enable-floating-ip]', $('configures a virtual machine\'s' +
      '\n     endpoint for the floating IP capability required to configure a SQL AlwaysOn' +
      '\n     Availability Group. This setting is required when using the SQL AlwaysOn' +
      '\n     Availability Groups in SQL server. This setting can\'t be changed after you' +
      '\n     create the endpoint'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      var useDefaults = true;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var inboundNatRule = utils.findFirstCaseIgnore(parentItem.inboundNatRules, { name: name });
      if (inboundNatRule) {
        throw new Error(util.format($('inbound nat rule with name "%s" already exists in load balancer "%s"'), name, lbName));
      }

      var parameters = {};

      if(!parameters.frontendIPConfiguration) {
        parameters.frontendIPConfiguration = {};
      }
      if(options.frontendIpId) {
        if(options.frontendIpName) {
          cli.output.warn($('--frontend-ip-name parameter will be ignored because --frontend-ip-id and --frontend-ip-name are mutually exclusive'));
        }
        parameters.frontendIPConfiguration.id = options.frontendIpId;
      } else if(options.frontendIpName) {
        var referredFrontendIPConfiguration = utils.findFirstCaseIgnore(loadBalancer.frontendIPConfigurations, { name: options.frontendIpName });
        if(!referredFrontendIPConfiguration) {
          throw new Error(util.format($('No frontend ip configuration with name "%s" found'), options.frontendIpName));
        }
        var idContainerFrontendIPConfiguration = referredFrontendIPConfiguration;
        parameters.frontendIPConfiguration.id = idContainerFrontendIPConfiguration.id;
      } else if(useDefaults) {
        if(loadBalancer.frontendIPConfigurations.length !== 0) {
          parameters.frontendIPConfiguration.id = loadBalancer.frontendIPConfigurations[0].id;
        } else {
          throw new Error(util.format($('Resource has no frontend ip configuration defined')));
        }
      }

      if(options.protocol) {
        parameters.protocol = validation.isIn(options.protocol, ['Udp', 'Tcp', 'All'], '--protocol');
      } else if(useDefaults) {
        parameters.protocol = defaultProtocol;
      }

      if(options.frontendPort) {
        parameters.frontendPort = parseInt(options.frontendPort, 10);
      } else if(useDefaults) {
        parameters.frontendPort = parseInt(defaultFrontendPort, 10);
      }

      if(options.backendPort) {
        parameters.backendPort = parseInt(options.backendPort, 10);
      } else if(useDefaults) {
        parameters.backendPort = parseInt(defaultBackendPort, 10);
      }

      if(options.idleTimeout) {
        parameters.idleTimeoutInMinutes = parseInt(options.idleTimeout, 10);
      } else if(useDefaults) {
        parameters.idleTimeoutInMinutes = parseInt(defaultIdleTimeoutInMinutes, 10);
      }

      if(options.enableFloatingIp) {
        parameters.enableFloatingIP = utils.parseBool(options.enableFloatingIp);
      } else if(useDefaults) {
        parameters.enableFloatingIP = utils.parseBool(defaultEnableFloatingIP);
      }

      parameters.name = name;
      parentItem.inboundNatRules.push(parameters);

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating inbound nat rule in load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }

      parentItem = loadBalancer;
      cli.interaction.formatOutput(utils.findFirstCaseIgnore(parentItem.inboundNatRules, { name: name }), generatorUtils.traverse);
    });

  inboundNatRules.command('set [resource-group] [lb-name] [name]')
    .description($('Update an inbound nat rule'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat rule'))
    .option('-t, --frontend-ip-name [frontend-ip-name]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-id'))
    .option('-s, --frontend-ip-id [frontend-ip-id]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-name'))
    .option('-p, --protocol [protocol]', $('the transport protocol for the' +
      '\n     endpoint. Possible values are \'Udp\' or \'Tcp\' or \'All.\''))
    .option('-f, --frontend-port [frontend-port]', $('the port for the external endpoint.' +
      '\n     Port numbers for each rule must be unique within the Load Balancer. Acceptable' +
      '\n     values range from 1 to 65534'))
    .option('-b, --backend-port [backend-port]', $('the port used for the internal' +
      '\n     endpoint. Acceptable values range from 1 to 65535'))
    .option('-i, --idle-timeout [idle-timeout]', $('the timeout for the TCP idle' +
      '\n     connection. The value can be set between 4 and 30 minutes. The default value is' +
      '\n     4 minutes. This element is only used when the protocol is set to TCP'))
    .option('-e, --enable-floating-ip [enable-floating-ip]', $('configures a virtual machine\'s' +
      '\n     endpoint for the floating IP capability required to configure a SQL AlwaysOn' +
      '\n     Availability Group. This setting is required when using the SQL AlwaysOn' +
      '\n     Availability Groups in SQL server. This setting can\'t be changed after you' +
      '\n     create the endpoint'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      var useDefaults = false;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var inboundNatRule = utils.findFirstCaseIgnore(parentItem.inboundNatRules, { name: name });
      if (!inboundNatRule) {
        throw new Error(util.format($('inbound nat rule with name "%s" not found in load balancer "%s"'), name, lbName));
      }

      var parameters = inboundNatRule;

      if(!parameters.frontendIPConfiguration) {
        parameters.frontendIPConfiguration = {};
      }
      if(options.frontendIpId) {
        if(options.frontendIpName) {
          cli.output.warn($('--frontend-ip-name parameter will be ignored because --frontend-ip-id and --frontend-ip-name are mutually exclusive'));
        }
        parameters.frontendIPConfiguration.id = options.frontendIpId;
      } else if(options.frontendIpName) {
        var referredFrontendIPConfiguration = utils.findFirstCaseIgnore(loadBalancer.frontendIPConfigurations, { name: options.frontendIpName });
        if(!referredFrontendIPConfiguration) {
          throw new Error(util.format($('No frontend ip configuration with name "%s" found'), options.frontendIpName));
        }
        var idContainerFrontendIPConfiguration = referredFrontendIPConfiguration;
        parameters.frontendIPConfiguration.id = idContainerFrontendIPConfiguration.id;
      }

      if(options.protocol) {
        parameters.protocol = validation.isIn(options.protocol, ['Udp', 'Tcp', 'All'], '--protocol');
      } else if(useDefaults) {
        parameters.protocol = defaultProtocol;
      }

      if(options.frontendPort) {
        parameters.frontendPort = parseInt(options.frontendPort, 10);
      } else if(useDefaults) {
        parameters.frontendPort = parseInt(defaultFrontendPort, 10);
      }

      if(options.backendPort) {
        parameters.backendPort = parseInt(options.backendPort, 10);
      } else if(useDefaults) {
        parameters.backendPort = parseInt(defaultBackendPort, 10);
      }

      if(options.idleTimeout) {
        parameters.idleTimeoutInMinutes = parseInt(options.idleTimeout, 10);
      } else if(useDefaults) {
        parameters.idleTimeoutInMinutes = parseInt(defaultIdleTimeoutInMinutes, 10);
      }

      if(options.enableFloatingIp) {
        parameters.enableFloatingIP = utils.parseBool(options.enableFloatingIp);
      } else if(useDefaults) {
        parameters.enableFloatingIP = utils.parseBool(defaultEnableFloatingIP);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating inbound nat rule in "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }

      parentItem = loadBalancer;
      cli.interaction.formatOutput(utils.findFirstCaseIgnore(parentItem.inboundNatRules, { name: name }), generatorUtils.traverse);
    });

  inboundNatRules.command('delete [resource-group] [lb-name] [name]')
    .description($('Delete an inbound nat rule'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat rule'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var index = utils.indexOfCaseIgnore(parentItem.inboundNatRules, { name: name });
      if (index === -1) {
        throw new Error(util.format($('inbound nat rule "%s" not found in load balancer "%s"'), name, lbName));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete inbound nat rule with name "%s" from load balancer "%s"? [y/n] '), name, lbName), _)) {
        return;
      }

      parentItem.inboundNatRules.splice(index, 1);

      progress = cli.interaction.progress('Deleting inbound nat rule');
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }
    });

  inboundNatRules.command('show [resource-group] [lb-name] [name]')
    .description($('Show an inbound nat rule'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat rule'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var inboundNatRule = utils.findFirstCaseIgnore(parentItem.inboundNatRules, { name: name });
      if (!inboundNatRule) {
        cli.output.warn(util.format($('inbound nat rule with name "%s" not found in the load balancer "%s"'), name, lbName));
      }

      cli.interaction.formatOutput(inboundNatRule, generatorUtils.traverse);
    });

  inboundNatRules.command('list [resource-group] [lb-name]')
    .description($('List inbound nat rules'))
    .usage('[options] <resource-group> <lb-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer = null;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      cli.interaction.formatOutput(parentItem.inboundNatRules, function (items) {
        if (!items || items.length === 0) {
          cli.output.warn($('No inbound nat rules found'));
        } else {
          cli.output.table(items, function (row, item) {
            generatorUtils.showTableRow(row, item);
          });
        }
      });
    });
};
