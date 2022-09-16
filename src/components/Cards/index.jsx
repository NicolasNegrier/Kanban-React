// == Import
import './styles.css';
import { useSelector } from "react-redux";
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';


// == Composant
const Cards = ({ id }) => {

	const cards = useSelector(state => state.cards.cards);
	console.log(id);

	return (
		<Droppable droppableId={id.toString()}>
			{provider => (
				<div className='cards' {...provider.droppableProps} ref={provider.innerRef}>
					{cards.map((card, index) => ( card.crd_lst_id === id && <Card key={card.crd_id} cardId={ card.crd_id } index={index} description={ card.crd_description } />))} 
				</div>
			)}
		</Droppable>
	);

};

// == Export
export default Cards;