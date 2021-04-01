import { IGetters, IMutations, IState, Mutations } from './types';

const MINUTES = 25;

export const state = (): IState => ({
	time: MINUTES * 60,
	isActive: false,
	hasCompleted: false,
});

export const getters: IGetters = {
	minutes: state => Math.floor(state.time / 60),
	seconds: state => state.time % 60,
};

export const mutations: IMutations = {
	[Mutations.SET_TIME] (state, newTime) {
		state.time = newTime;
	},
	[Mutations.RESET_TIME] (state) {
		state.time = MINUTES * 60;
	},
	[Mutations.SET_IS_ACTIVE] (state, isActive) {
		state.isActive = isActive;
	},
	[Mutations.SET_HAS_COMPLETED] (state, hasCompleted) {
		state.hasCompleted = hasCompleted;
	},
};
