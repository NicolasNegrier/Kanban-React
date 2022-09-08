import axios from "axios";
import { GET_LISTS, ADD_LIST, addList, DELETE_LIST, deleteList } from "../actions/list";
import { delList, setList, setLists } from "../reducers/list";



const lists = (store) => (next) => async (action) => {

    switch(action.type) {
        case GET_LISTS: {
            try {
                const { data } = await axios.get('http://localhost:3002/projects/1',
                {headers:{"Content-Type" : "application/json"}}
                );
            const projectId = data.prj_id;
            const project = data;
            const lists = data.lists;
            store.dispatch(setLists(project, projectId, lists ));
            break;
            }
            catch(error) {
                console.error(error);
                break;
            }
        }
        
        case ADD_LIST: {
            try {
                const addListInput = store.getState().lists.addListInput;
                const projectId = store.getState().lists.projectId;

                const data = await axios.put('http://localhost:3002/lists', {
                    name: addListInput,
                    prj_id: projectId,
                })
            
                // console.log('RESULTAT PUT NEW LIST', data.data);
                store.dispatch(setList(data.data));
                break;
            }
            catch(error) {
                console.log(error);
                break;
            }
        }

        case DELETE_LIST: {
            try {
                const listId = action.listId;

                const data = await axios.delete(`http://localhost:3002/lists/${ listId }`)
            
                // console.log('RESULTAT DELETE LIST', data);
                store.dispatch(delList(listId));
                break;
            }
            catch(error) {
                console.log(error);
                break;
            }
        }

        default:
            next(action);
            break;
    }
};

export default lists;