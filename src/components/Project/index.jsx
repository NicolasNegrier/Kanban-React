// == Import
import './styles.css';
import { useSelector } from "react-redux";
import List from "../List";


// == Composant
const Project = () => {

	// const projectId = useSelector(state => state.lists.projectId);
	// const projectName = useSelector(state => state.lists.projectName);
	const lists = useSelector(state => state.lists.lists);

	return (
		
		<div className="lists">
			{lists 
				? <section className="lists__items">
					{lists.map((list) => (<List key={list.lst_id} name={ list.lst_name } cards={list.cards} id={list.lst_id} />))}
				</section>
				: <section className="lists__items">
					Pas de liste pour ce projet
				</section>
			}	 	
        </div>
	);

};

// == Export
export default Project;