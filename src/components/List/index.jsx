import { useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList } from '../../actions/list';
import { addCardToggle, setInputCard } from '../../reducers/card';
import { addCard, getCards } from '../../actions/card';
import Cards from '../Cards';


// == Composant
const List = ({name, cards, listId}) => {

	const dispatch = useDispatch();
	const valueInputCard = useSelector(state => state.cards.inputAddCard);
	// const cards = useSelector(state => state.cards.cards);
	const addCardActive = useSelector(state => state.cards.addCardActive);
	// const listId = useSelector(state => state.cards.listId);


	const handleDelete = (event) => {
		dispatch(deleteList(event.target.parentElement.parentElement.parentElement.id));
	};

	const handlerAddCard = (event) => {
		dispatch(addCardToggle(event.target.parentElement.id));
	};

	const addCardHandler = (event) => {
		dispatch(setInputCard({value: event.target.value, name: event.target.name}));
	};

	const submitCardHandler = (event) => {
		event.preventDefault();
		dispatch(addCard(event.target.parentElement.id));
	};

	useEffect(() => {
		if (addCardActive) {
			dispatch(getCards());
			dispatch(addCardToggle());
		}
	},[cards]);

	return (
		
		<div id={listId} className="list">
			<header className='list__header'>
				<h2 className='list__title' >{name}</h2>
				<div className='list__gestIcons' onClick={ handleDelete } ><Icon name='trash' /></div>
			</header>

			{ addCardActive ? 
				<form className='formCard' onSubmit={ submitCardHandler }>
					<input type='text' className='addCard' value={ valueInputCard.name === `addInputCard${listId}` ? valueInputCard.value : '' } name={`addInputCard${listId}`} placeholder='Ajouter une tache' onChange={ addCardHandler } ></input>
					<button><Icon name='add square' /></button>
				</form> :
				<button onClick={ handlerAddCard }>Ajouter une tache</button>
			}
			<Cards listId={ listId } cards= { cards } />		
        </div>
	);

};

// == Export
export default List;