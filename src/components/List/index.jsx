import { useEffect } from 'react';
import Card from '../Card';
import { Icon } from 'semantic-ui-react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../actions/list';


// == Composant
const List = ({name, cards = [], id}) => {

	const dispatch = useDispatch();

	const handleDelete = (event) => {
		// console.log(event.target);
		// console.log(event.target.parentElement.parentElement.parentElement.id);
		dispatch(deleteList(event.target.parentElement.parentElement.parentElement.id));
	}

	return (
		
		<div id={id} className="list">
			<header className='list__header'>
				<h2 className='list__title' >{name}</h2>
				<div className='list__gestIcons' onClick={ handleDelete } ><Icon name='trash' /></div>
			</header>
            
			<div className='cards'>
				{cards.map((card) => (<Card key={card.crd_id} description={ card.crd_description } />))} 
			</div>
        </div>
	);

};

// == Export
export default List;