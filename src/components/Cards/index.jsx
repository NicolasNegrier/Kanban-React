// == Import
import './styles.css';
import { useSelector } from "react-redux";
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';


// == Composant
const Cards = ({ listId, cards }) => {

	// const cards = useSelector(state => state.cards.cards);

	return (
		<Droppable droppableId={listId.toString()}>
			{provider => (
				<div className='cards' {...provider.droppableProps} ref={provider.innerRef}>
					{cards.map((card, index) => ( <Card key={card.crd_id} cardId={ card.crd_id } index={index} description={ card.crd_description } />))} 
					{provider.placeholder}
				</div>
			)}
		</Droppable>
	);

};

// == Export
export default Cards;