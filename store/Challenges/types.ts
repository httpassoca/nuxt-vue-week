import { MutationTree } from 'vuex';

export interface XP {
	current: number;
	start: number;
	end: number;
}

export interface Challenge {
	type: string;
	description: string;
	amount: number;
}

export interface IState {
	level: number;
	xp: XP;
	completedChallenges: number;
	currentChallengeIndex: number | null;
	isLevelUpModalOpen: boolean;
	allChallenges: Challenge[];
}

export interface ICookie {
	level: number;
	xp: XP;
	completedChallenges: number;
}

export interface IGetters {
	challengesLength: (state: IState) => number;
	currentXpPercentage: (state: IState) => number;
	currentChallenge: (state: IState) => Challenge | null;
}

export enum Mutations {
	SET_CURRENT_CHALLENGE_INDEX = 'SET_CURRENT_CHALLENGE_INDEX',
	SET_IS_LEVEL_UP_MODAL_OPEN = 'SET_IS_LEVEL_UP_MODAL_OPEN',
	COMPLETE_CHALLENGE = 'COMPLETE_CHALLENGE',
	SAVE_COOKIE_DATA = 'SAVE_COOKIE_DATA',
}

export type RootState = ReturnType<() => IState>

export interface IMutations extends MutationTree<RootState> {
	[Mutations.SET_CURRENT_CHALLENGE_INDEX](s: IState, p: number): void;
	[Mutations.SET_IS_LEVEL_UP_MODAL_OPEN](s: IState, p: boolean): void;
	[Mutations.COMPLETE_CHALLENGE](s: IState, p: number): void;
	[Mutations.SAVE_COOKIE_DATA](s: IState, p: ICookie): void;
}
