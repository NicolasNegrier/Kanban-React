export const GET_LISTS = 'GET_LISTS';
export const SET_LISTS = 'SET_LISTS';
export const INPUT_LIST = 'INPUT_LIST';
export const ADD_LIST = 'ADD_LIST';



export const getLists = () => ({
    type: GET_LISTS,
});

export const setLists = (data, projectId) => ({
    type: SET_LISTS,
    data,
    projectId,
});

export const inputLists = (value) => ({
    type: INPUT_LIST,
    payload: value,
})

export const addList = () => ({
    type: ADD_LIST,

})