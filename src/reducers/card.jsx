import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
	name: "cards",
	initialState: {
		cards: [],
		id: null,
		description: '',
		position: null,
		listId: '',
		inputAddCard: {},
	},

	reducers: {
		setCards: (state, action) => {
			state.cards = action.payload;
		},

		setInputCard: (state, action) => {
			state.inputAddCard = action.payload;
		},

		setCard: (state, action) => {
			console.log(action.payload);
			state.cards.push(action.payload);
			state.inputAddCard = {};
		},

		// delCard: (state, action) => {
		// 	state.lists = state.lists.filter(list => list.lst_id !== Number(action.payload));
		// }
	}
});

export const { setCards, setInputCard, setCard } = cardSlice.actions;

export default cardSlice;

// export const initialState = {
	// id: null,
	// description: '',
	// position: null,
// };

// const reducer = (state = initialState, action = {}) => {
// 	switch (action.type) {

		
// 		default:
// 			return state;
// 	}
// };

// export default reducer;