const {
  createDivision,
  removeTeamsThatStink,
  removeMiddleTeam,
} = require('./index');

describe('07_rest', () => {
  describe('createDivision', () => {
    it('creates a division', () => {
      const division = createDivision(
        'NL Central',
        'Brewers',
        'Cubs',
        'Cardinals',
        'Pirates',
        'Reds'
      );

      expect(division).toEqual({
        division: 'NL Central',
        teams: ['Brewers', 'Cubs', 'Cardinals', 'Pirates', 'Reds'],
      });
    });
  });

  describe('removeTeamsThatStink', () => {
    it('removes the cubs & cards', () => {
      const division = {
        brewers: 'RULE',
        cubs: 'stink',
        cardinals: 'stink',
        pirates: 'meh',
        reds: 'lol',
      };

      const result = removeTeamsThatStink(division);

      expect(result).toEqual({
        brewers: 'RULE',
        pirates: 'meh',
        reds: 'lol',
      });
    });
  });

  describe('removeMiddleTeam', () => {
    it('removes the middle team', () => {
      const teams = ['brewers', 'cubs', 'cardinals', 'pirates', 'reds'];

      const result = removeMiddleTeam(teams);

      expect(result).toEqual(['brewers', 'cubs', 'pirates', 'reds']);
    });
  });
});
