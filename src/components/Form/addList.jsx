// == Import
// import './styles.css';
import { useDispatch, useSelector } from "react-redux";
import { addList} from '../../actions/list';
import { setInputList } from "../../reducers/list";


// == Composant
const AddList = () => {

    const inputValue = useSelector((state) => state.lists.addListInput);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        dispatch(setInputList(evt.target.value));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(addList())
    }

	return (
		
		<form onSubmit={handleSubmit}>
            <input type="text" name="addListInput" value={inputValue} placeholder='nom de la nouvelle liste' onChange={handleChange}/>
            <button>Ajouter la liste</button>
        </form>
	);

};

// == Export
export default AddList;