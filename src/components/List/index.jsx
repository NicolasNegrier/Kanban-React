import { useEffect } from 'react';
import Card from '../Card';
import { Icon } from 'semantic-ui-react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList } from '../../actions/list';
import { setInputCard } from '../../reducers/card';
import { addCard } from '../../actions/card';


// == Composant
const List = ({name, id}) => {

	const dispatch = useDispatch();
	const valueInputCard = useSelector(state => state.cards.inputAddCard);
	const cards = useSelector(state => state.cards.cards);
	console.log(cards);


	const handleDelete = (event) => {
		// console.log(event.target);
		// console.log(event.target.parentElement.parentElement.parentElement.id);
		dispatch(deleteList(event.target.parentElement.parentElement.parentElement.id));
	};

	const addCardHandler = (event) => {
		console.log(event.target.value);
		dispatch(setInputCard({value: event.target.value, name: event.target.name}));
	};

	const submitCardHandler = (event) => {
		event.preventDefault();
		console.log(event.target.parentElement.id);
		dispatch(addCard(event.target.parentElement.id));
	};

	return (
		
		<div id={id} className="list">
			<header className='list__header'>
				<h2 className='list__title' >{name}</h2>
				<div className='list__gestIcons' onClick={ handleDelete } ><Icon name='trash' /></div>
			</header>
			<form className='formCard' onSubmit={ submitCardHandler }>
				<input type='text' className='addCard' value={ valueInputCard.name === `addInputCard${id}` ? valueInputCard.value : '' } name={`addInputCard${id}`} placeholder='Ajouter une tache' onChange={ addCardHandler } ></input>
				<button><Icon name='add square' /></button>
			</form>
            
			<div className='cards'>
				{cards.map((card) => ( card.crd_lst_id === id && <Card key={card.crd_id} description={ card.crd_description } />))} 
			</div>
        </div>
	);

};

// == Export
export default List;