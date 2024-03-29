import { IMutations, Mutations } from './types';

export default {
	[Mutations.SET_CURRENT_CHALLENGE_INDEX] (state, index) {
		state.currentChallengeIndex = index;
	},
	[Mutations.SET_IS_LEVEL_UP_MODAL_OPEN] (state, flag) {
		state.isLevelUpModalOpen = flag;
	},
	[Mutations.COMPLETE_CHALLENGE] (state, xpAmount) {
		const { current, end } = state.xp;
		const shoudLevelUp = xpAmount + current >= end;
		state.completedChallenges += 1;
		if (shoudLevelUp) {
			state.level += 1;
			const remainingXp = xpAmount + current - end;
			const experienceToNextLevel = Math.pow((state.level + 1) * 4, 2);
			state.xp = {
				current: remainingXp,
				start: 0,
				end: experienceToNextLevel,
			};
			state.isLevelUpModalOpen = true;
		} else {
			state.xp = {
				...state.xp,
				current: current + xpAmount,
			};
		}
	},
	[Mutations.SAVE_COOKIE_DATA] (state, cookie) {
		state.level = cookie.level;
		state.xp = cookie.xp;
		state.completedChallenges = cookie.completedChallenges;
	},
} as IMutations;
