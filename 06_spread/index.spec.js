const { addDebugFlag, mergeConfigs, mergeServers } = require('./index');

describe('06_spread', () => {
  describe('addDebugFlag', () => {
    it('adds debug flag to config', () => {
      const config = {
        server: 'a server',
        port: '1234',
        env: 'dev',
      };

      const result = addDebugFlag(config, true);

      expect(result).toEqual({
        server: 'a server',
        port: '1234',
        env: 'dev',
        debugFlag: true,
      });
    });

    it('overrides debug flag', () => {
      const config = {
        server: 'a server',
        port: '1234',
        env: 'prod',
        debugFlag: false,
      };

      const result = addDebugFlag(config, true);

      expect(result).toEqual({
        server: 'a server',
        port: '1234',
        env: 'prod',
        debugFlag: true,
      });
    });
  });

  describe('mergeConfigs', () => {
    it('merges configs', () => {
      const configA = {
        server: 'server a',
        port: 'port a',
        env: 'env a',
        debugFlag: false,
      }

      const configB = {
        server: 'server b',
        env: 'env b',
      }

      const result = mergeConfigs(configA, configB);

      expect(result).toEqual({
        server: 'server b',
        port: 'port a',
        env: 'env b',
        debugFlag: false,
      })
    });
  });

  describe('mergeServers', () => {
    it('merges servers', () => {
      const devServers = [
        'dev01',
        'dev02',
        'dev03',
      ];

      const prodServers = [
        'prod01',
        'prod02',
        'prod03',
      ];

      const result = mergeServers(devServers, prodServers);

      expect(result).toEqual([
        'dev01',
        'dev02',
        'dev03',
        'prod01',
        'prod02',
        'prod03',
      ])
    })
  });
});
