// == Import
import './styles.css';
import { useSelector } from "react-redux";
import Card from './Card';


// == Composant
const Cards = ({ id }) => {

	const cards = useSelector(state => state.cards.cards);

	return (
		
		<div className='cards'>
				{cards.map((card) => ( card.crd_lst_id === id && <Card key={card.crd_id} cardId={ card.crd_id } description={ card.crd_description } />))} 
		</div>
	);

};

// == Export
export default Cards;