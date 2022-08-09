import axios from "axios";
import { GET_LISTS, setLists, ADD_LIST, addList } from "../actions/list";



const lists = (store) => (next) => async (action) => {

    switch(action.type) {
        case GET_LISTS: {
            const { data } = await axios.get('http://localhost:3002/projects/1');
            console.log('MIDDLEWARE data.prj_id=>', data);
            const projectId = data.prj_id;
            const project = data;
            const lists = data.lists;
            store.dispatch(setLists(project, projectId, lists ));
            break;
        }
        
        case ADD_LIST: {
            
            const {list} = store.getState();
            console.log('STATE===>',list.lists)
            const { addListInput, projectId } = list;

            await axios.put('http://localhost:3002/lists', {
                name: addListInput,
                prj_id: projectId,
            })
            .then( (response) => {
                console.log('RESULTAT PUT NEW LIST', response);
                store.dispatch(addList(response));

            })
            .catch( (error) => {
                console.log(error);
            })

            
            break;
        }

        default:
            next(action);
            break;
    }
};

export default lists;