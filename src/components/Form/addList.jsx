// == Import
// import './styles.css';
import { useDispatch, useSelector } from "react-redux";
import { addList, inputLists } from '../../actions/list';


// == Composant
const AddList = () => {

    const inputValue = useSelector((state) => state.list.addListInput);
    console.log(inputValue);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        dispatch(inputLists(evt.target.value));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(addList())
    }

	return (
		
		<form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} placeholder='nom de la nouvelle liste' onChange={handleChange}/>
            <button>Ajouter la liste</button>
        </form>
	);

};

// == Export
export default AddList;