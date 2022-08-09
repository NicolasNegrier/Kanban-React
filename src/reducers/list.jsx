import { INPUT_LIST, SET_LISTS, ADD_LIST } from '../actions/list';

export const initialState = {
	projectId: null,
	project: [],
	lists: [],
	addListInput: '',
};

const reducer = (state = initialState, action = {}) => {
	console.log('REDUCER');
	switch (action.type) {
		case SET_LISTS:
			return {
				...state,
				project: action.project,
				projectId: action.projectId,
				lists: action.lists,
			};

		case INPUT_LIST:
			return {
				...state,
				addListInput: action.payload,
			};

		case ADD_LIST:
			return {
				...state,
				lists: action.data,
			};
		
		default:
			return state;
	}
};

export default reducer;