import { IGetters } from './types';

export default {
	challengesLength: state => state.allChallenges.length,
	currentChallenge: state => (typeof state.currentChallengeIndex === 'number') ? state.allChallenges[state.currentChallengeIndex] : null,
	currentXpPercentage: (state) => {
		const percent = (state.xp.current / state.xp.end) * 100;
		return Number(percent.toFixed(2));
	},
} as IGetters;
