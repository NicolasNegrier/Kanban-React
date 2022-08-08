import Card from '../Card';
import './styles.css';


// == Composant
const List = ({name, cards, id}) => {

	return (
		
		<div className="list">
            <h2 id={id}>{name}</h2>
			<div className='cards'>
				{cards.map((card) => (<Card key={card.crd_id} description={ card.crd_description } />))} 
			</div>
        </div>
	);

};

// == Export
export default List;