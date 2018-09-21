function addDebugFlag(config, debugFlag) {
  const result = {
    server: config.server,
    port: config.port,
    env: config.env,
    debugFlag,
  };

  return result;
}

function mergeConfigs(configA, configB) {
  const result = {
    server: configB.server || configA.server,
    port: configB.port || configA.port,
    env: configB.env || configA.env,
    debugFlag: configB.debugFlag || configA.debugFlag,
  };

  return result;
}

function mergeServers(devServers, prodServers) {

  const result = devServers
    .concat(prodServers);

  return result;
}

module.exports = {
  addDebugFlag,
  mergeConfigs,
  mergeServers,
};
