// == Import
import './styles.css';
import { useSelector } from "react-redux";
import List from "../List";
import AddList from '../Form/addList';


// == Composant
const Project = () => {

	const project = useSelector((state) => state.list.project)
	const lists = useSelector((state) => state.list.lists)
	console.log('PROJECT==>',project);
	console.log('LISTS==>',lists);
	return (
		
		<div className="lists">
		 	<section className="lists__header">
		 		<h1>Nom du Projet n°{project.prj_id}</h1>
		 		<AddList projectId={project.prj_id}/>
		 		<button>Ajouter une liste</button>
		 	</section>
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