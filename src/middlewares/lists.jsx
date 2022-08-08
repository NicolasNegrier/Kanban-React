import axios from "axios";
import { GET_LISTS, getLists, setLists, ADD_LIST } from "../actions/list";



const lists = (store) => (next) => async (action) => {

    switch(action.type) {
        case GET_LISTS: {
            const { data } = await axios.get('http://localhost:3002/projects/1');
            console.log('MIDDLEWARE data.prj_id=>', data.prj_id);
            const projectId = data.prj_id;
            store.dispatch(setLists(data, projectId ));
            break;
        }
        
        case ADD_LIST: {
            const state = store.getSate;
            console.log('STATE===>',state)
            const { addListInput, projectId } = state.list;

            // const  { data } = await axios.put('http://localhost:3002/lists', {
            //     name: addListInput,
            //     prj_id: projectId,
            // });

            console.log('RESULTAT PUT NEW LIST', data);
            break;
        }

        default:
            next(action);
            break;
    }
};

export default lists;