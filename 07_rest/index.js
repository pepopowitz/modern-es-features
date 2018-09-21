function createDivision(division, team1, team2, team3, team4, team5) {
  return {
    division,
    teams: [team1, team2, team3, team4, team5],
  };
}

function removeTeamsThatStink(division) {
  const clonedDivision = {
    ...division,
  };

  delete clonedDivision.cubs;
  delete clonedDivision.cardinals;

  return clonedDivision;
}

function removeMiddleTeam(teams) {
  const result = [...teams.slice(0, 2), ...teams.slice(3, 5)];

  return result;
}

module.exports = {
  createDivision,
  removeTeamsThatStink,
  removeMiddleTeam,
};
