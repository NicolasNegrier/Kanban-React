// == Import
import './styles.css';
import { useSelector } from "react-redux";
import List from "../List";
import { DragDropContext } from 'react-beautiful-dnd';


// == Composant
const Project = () => {

	// const projectId = useSelector(state => state.lists.projectId);
	// const projectName = useSelector(state => state.lists.projectName);
	const lists = useSelector(state => state.lists.lists);

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;
		console.log(destination);
		console.log(source);
		console.log(draggableId);
	  };
	

	return (
		
		<div className="lists">
			
				{lists ? 
				<DragDropContext onDragEnd={onDragEnd}>
					<section className="lists__items">
						{lists.map((list) => (<List key={list.lst_id} name={ list.lst_name } cards={list.cards} id={list.lst_id} />))}
					</section>
				</DragDropContext>
					: <section className="lists__items">
						Pas de liste pour ce projet
					</section>
				}
			
        </div>
	);

};

// == Export
export default Project;