// == Import
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import React from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../actions/card';
import { Draggable } from 'react-beautiful-dnd';


// == Composant
const Card = ({ cardId, index, description }) => {

	const dispatch = useDispatch();
	const [open, setOpen] = React.useState(false)

	const handleDelCard = (event) => {
		dispatch(deleteCard(cardId));
		setOpen(false);
	};

	return (
		
		
			<Draggable draggableId={cardId.toString()} index={index}>
				{provider => (
					<div id={ cardId } className="card__item" {...provider.draggableProps} {...provider.dragHandleProps} ref={provider.innerRef} >
						{description}
						<Modal
							basic
							onClose={() => setOpen(false)}
							onOpen={() => setOpen(true)}
							open={open}
							size='small'
							trigger={<Icon name='trash' />}
							>
							<Header icon>
								<Icon name='trash' />
								Supprimer la tache
							</Header>
							<Modal.Content>
								<p>
								Etes vous sur de vouloir supprimer cette tache?
								</p>
							</Modal.Content>
							<Modal.Actions>
								<Button basic color='red' inverted onClick={() => setOpen(false)}>
								<Icon name='remove' /> Non
								</Button>
								<Button color='green' inverted onClick={ handleDelCard }>
								<Icon name='checkmark' /> Oui
								</Button>
							</Modal.Actions>
						</Modal>
					</div>
				)}
			  
			</Draggable>
        
	);

};

// == Export
export default Card;