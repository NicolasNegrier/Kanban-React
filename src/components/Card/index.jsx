// == Import
import './styles.css';
import { useSelector } from "react-redux";


// == Composant
const Card = ({ description }) => {

	return (
		
		<div className="card__item">
			  {description}
        </div>
	);

};

// == Export
export default Card;