import { MutationTree } from 'vuex';

export interface IState {
	time: number;
	isActive: boolean;
	hasCompleted: boolean;
}

export interface IGetters {
	minutes: (state: IState) => number;
	seconds: (state: IState) => number;
}

export enum Mutations {
	SET_TIME = 'SET_TIME',
	RESET_TIME = 'RESET_TIME',
	SET_IS_ACTIVE = 'SET_IS_ACTIVE',
	SET_HAS_COMPLETED = 'SET_HAS_COMPLETED',
}

export type RootState = ReturnType<() => IState>

export interface IMutations extends MutationTree<RootState> {
	[Mutations.SET_TIME](s: IState, p: number): void;
	[Mutations.RESET_TIME](s: IState): void;
	[Mutations.SET_IS_ACTIVE](s: IState, p: boolean): void;
	[Mutations.SET_HAS_COMPLETED](s: IState, p: boolean): void;
}
