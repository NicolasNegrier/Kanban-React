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
		addCardActive: false,
	},

	reducers: {
		setCards: (state, action) => {
			state.cards = action.payload;
		},

		setInputCard: (state, action) => {
			state.inputAddCard = action.payload;
		},

		setCard: (state, action) => {
			state.cards.push(action.payload);
			state.inputAddCard = {};
		},

		addCardToggle: (state, action) => {
			state.addCardActive = !state.addCardActive;
			state.listId = action.payload;
		},

		delCard: (state, action) => {
			state.cards = state.cards.filter(card => card.crd_id !== Number(action.payload));
		}
	}
});

export const { setCards, setInputCard, setCard, addCardToggle, delCard } = cardSlice.actions;

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