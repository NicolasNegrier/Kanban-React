import axios from "axios";
import { ADD_CARD, GET_CARDS } from "../actions/card";
import { setCard, setCards } from "../reducers/card";



const cards = (store) => (next) => async (action) => {

    switch(action.type) {
        case GET_CARDS: {
            try {
                const { data } = await axios.get('http://localhost:3002/cards',
                {headers:{"Content-Type" : "application/json"}}
                );
            
            store.dispatch(setCards(data));
            console.log(data);
            break;
            }
            catch(error) {
                console.error(error);
                break;
            }
        }
        
        case ADD_CARD: {
            try {
                const listId = action.listId;
                const description = store.getState().cards.inputAddCard.value;

                const data = await axios.put('http://localhost:3002/cards', {
                    description,
                    lst_id: listId,
                })
            
                console.log('RESULTAT PUT NEW CARD', data);
                store.dispatch(setCard(data.data));
                break;
            }
            catch(error) {
                console.log(error);
                break;
            }
        }

        // case DELETE_LIST: {
        //     try {
        //         const listId = action.listId;

        //         const data = await axios.delete(`http://localhost:3002/lists/${ listId }`)
            
        //         // console.log('RESULTAT DELETE LIST', data);
        //         store.dispatch(delList(listId));
        //         break;
        //     }
        //     catch(error) {
        //         console.log(error);
        //         break;
        //     }
        // }

        default:
            next(action);
            break;
    }
};

export default cards;