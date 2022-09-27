// == Import
import './styles.css';
import { useSelector } from "react-redux";
import List from "../List";
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { movList } from '../../reducers/list';


// == Composant
const Project = () => {

	// const projectId = useSelector(state => state.lists.projectId);
	// const projectName = useSelector(state => state.lists.projectName);
	const lists = useSelector(state => state.lists.lists);
	const cards = useSelector(state => state.cards.cards);
	const dispatch = useDispatch();

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;

		// Si je sors de ma colonne, je stoppe le process
		if (!destination) {
			return
		}
		// Si la destination de la tache et la meme qu'au depart, je stoppe le process
		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return
		}

		const start = source.droppableId;
		const finish = destination.droppableId;

		if (start === finish) {
			// Récuperation de la liste où est modifié l'ordre des taches
		const listStart = lists.find(list => list.lst_id === Number(source.droppableId));
		// Creation d'une copie du tableau des taches (cards) de la liste en question
		const cardsList = listStart.cards.map(cards => cards);
		// Récupération de la tache (card) qui est deplacée
		const cardSelected = cardsList.find(card => card.crd_id === Number(draggableId));

		// Effacement la tache (card) selectionnée du tableau des taches
		cardsList.splice(source.index, 1);
		// Copie de la tache (card) selectionnée à son nouvel emplacement
		cardsList.splice(destination.index, 0, cardSelected);

		// Remplacement du tableau des taches (cards) avec le nouveau tableau avec le nouvel ordre des taches (cards)
		const newList = {
			...listStart,
			cards: cardsList
		};

		// Copie du tableau des liste sans la liste cible
		const listDel = lists.filter(list => list.lst_id !== Number(source.droppableId));
		// Insertion de la liste avec le nouvel ordre de tache dans la copie du tableau des listes
		const newLists = listDel.push(newList);
		// Demande d'intention envoyé au reducer afin de sauvegarder le nouveau tableau des listes
		dispatch(movList(listDel));
		return
		}

		// Récuperation de la liste où est modifié l'ordre des taches
		const listStart = lists.find(list => list.lst_id === Number(start));
		// Récuperation de la liste où est modifié l'ordre des taches
		const listFinish = lists.find(list => list.lst_id === Number(finish));
		// Creation d'une copie du tableau des taches (cards) de la liste depart
		const cardsListStart = listStart.cards.map(cards => cards);
		// Creation d'une copie du tableau des taches (cards) de la liste destination
		const cardsListFinish = listFinish.cards.map(cards => cards);
		// Récupération de la tache (card) qui est deplacée
		const cardSelected = cardsListStart.find(card => card.crd_id === Number(draggableId));

		const newCardSelected = {
			...cardSelected,
			crd_lst_id: Number(finish)
		};

		console.log(newCardSelected);
		// Effacement de la tache (card) selectionnée du tableau des taches
		cardsListStart.splice(source.index, 1);
		// Copie de la tache (card) selectionnée à son nouvel emplacement
		cardsListFinish.splice(destination.index, 0, newCardSelected);

		// Remplacement du tableau des taches (cards) avec le nouveau tableau avec le nouvel ordre des taches (cards)
		const newListStart = {
			...listStart,
			cards: cardsListStart
		};


		const newListFinish = {
			...listFinish,
			cards: cardsListFinish
		};


		// Copie du tableau des liste sans la liste cible
		const listStartDel = lists.filter(list => list.lst_id !== Number(start));
		const listFinishDel = listStartDel.filter(list => list.lst_id !== Number(finish));
		// Insertion de la liste avec le nouvel ordre de tache dans la copie du tableau des listes
		const newLists = listFinishDel.push(newListStart, newListFinish);
		// Demande d'intention envoyé au reducer afin de sauvegarder le nouveau tableau des listes
		dispatch(movList(listFinishDel));

		// console.log(listDel);
		// console.log('newLists===>',newLists);

		// console.log(listStart)
		// console.log(newList);

		// console.log(destination);
		// console.log(source);
		// console.log(draggableId);
		console.log(lists);
		
	  };
	

	return (
		
		<div className="lists">
			
				{lists ? 
				<DragDropContext onDragEnd={onDragEnd}>
					<section className="lists__items">
						{lists.map((list) => (<List key={list.lst_id} name={ list.lst_name } cards={list.cards} listId={list.lst_id} />))}
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