export const ADD_CARD = 'ADD_CARD';
export const GET_CARDS = 'GET_CARDS';
export const DELETE_CARD = 'DELETE_CARD';

export const getCards = () => ({
    type: GET_CARDS,
});

export const addCard = (listId) => ({
    type: ADD_CARD,
    listId,
});

export const deleteCard = (cardId) => ({
    type: DELETE_CARD,
    cardId,
})