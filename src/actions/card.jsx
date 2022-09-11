export const ADD_CARD = 'ADD_CARD';
export const GET_CARDS = 'GET_CARDS';

export const getCards = () => ({
    type: GET_CARDS,
});

export const addCard = (listId) => ({
    type: ADD_CARD,
    listId,
});