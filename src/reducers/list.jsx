import { INPUT_LIST, SET_LISTS } from '../actions/list';

export const initialState = {
	projectId: null,
	data: [],
	addListInput: '',
};

const reducer = (state = initialState, action = {}) => {
	console.log('REDUCER');
	switch (action.type) {
		case SET_LISTS:
			return {
				...state,
				data: action.data,
				projectId: action.projectId,
			};

		case INPUT_LIST:
			return {
				...state,
				addListInput: action.payload,
			}
		
		default:
			return state;
	}
};

export default reducer;