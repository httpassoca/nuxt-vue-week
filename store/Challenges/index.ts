import allChallenges from '~/assets/challenges/data';

import { IState } from './types';

export const state = ():IState => ({
	level: 1,
	xp: {
		start: 0,
		current: 0,
		end: 64,
	},
	completedChallenges: 0,
	currentChallengeIndex: null,
	isLevelUpModalOpen: false,
	allChallenges,
});
