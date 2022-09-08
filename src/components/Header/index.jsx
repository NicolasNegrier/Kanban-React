// == Import
import './styles.css';
import { useSelector } from "react-redux";
import List from "../List";
import AddList from '../Form/addList';


// == Composant
const Project = () => {

	const projectName = useSelector(state => state.lists.projectName);

	return (
		
        <section className="lists__header">
            <h1>Projet { projectName } </h1>
            <AddList />
        </section>
	);

};

// == Export
export default Project;


