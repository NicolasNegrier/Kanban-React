import { createSlice } from '@reduxjs/toolkit';
// import { INPUT_LIST, SET_LISTS, ADD_LIST } from '../actions/list';

const listSlice = createSlice({
	name: "lists",
	initialState: {
			projectId: 8,
			projectName: '',
			projetDepId: '',
			project: [],
			lists: [],
			addListInput: '',
		},

	reducers: {
		setLists: (state, action) => {
			state.lists = action.payload.lists;
			state.projectId = action.payload.prj_id;
			state.projectName = action.payload.prj_name;
			state.projetDepId = action.payload.prj_dpt_id;
		},

		setInputList: (state, action) => {
			state.addListInput = action.payload;
		},

		setList: (state, action) => {
			console.log(action.payload);
			state.lists.push(action.payload);
			state.addListInput = '';
		},

		delList: (state, action) => {
			state.lists = state.lists.filter(list => list.lst_id !== Number(action.payload));
		}
	}
});

export const { setLists, setInputList, setList, delList } = listSlice.actions;

export default listSlice;