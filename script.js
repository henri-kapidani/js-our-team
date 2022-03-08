/*
Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.

BONUS:
Utilizziamo gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

SUPER BONUS:
Cliccando una card viene eliminata (dal DOM e dall'array);
*/

const arrTeam = [
	{
		name: 'Wayne Barnett',
		role: 'Founder & CEO',
		image: 'wayne-barnett-founder-ceo.jpg',
	},
	{
		name: 'Angela Caroll',
		role: 'Chief Editor',
		image: 'angela-caroll-chief-editor.jpg',
	},
	{
		name: 'Walter Gordon',
		role: 'Office Manager',
		image: 'walter-gordon-office-manager.jpg',
	},
	{
		name: 'Angela Lopez',
		role: 'Social Media Manager',
		image: 'angela-lopez-social-media-manager.jpg',
	},
	{
		name: 'Scott Estrada',
		role: 'Developer',
		image: 'scott-estrada-developer.jpg',
	},
	{
		name: 'Barbara Ramos',
		role: 'Graphic Designer',
		image: 'barbara-ramos-graphic-designer.jpg',
	},
];

const eleContainer = document.querySelector('.team-container');
const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImage = document.getElementById('image');
// const btnAddMember = document.getElementById('addMemberButton');
const formNewMember = document.querySelector('.form-container');

for (let i = 0; i < arrTeam.length; i++) {
	// debugger; // se la console è aperta blocca l'esecuzione del codice ed apre la tab del debugging
	renderCard(arrTeam[i]);
}

// btnAddMember.addEventListener('click', addMember); // se non usiamo il form
formNewMember.addEventListener('submit', addMember); // se usiamo il form
function addMember(event) {
	// crea oggetto del nuovo membro prendendo i dati dal form
	const objMember = {
		name: inputName.value,
		role: inputRole.value,
		image: inputImage.value,
	};

	addMemberToArray(objMember);
	renderCard(objMember);
	resetForm();

	event.preventDefault(); // per annullare il comportamento di default del broser che aggiorna oppure cambia pagina al submit del form
}


/* function definitions */

function renderCard(objMember) {
	const eleCard = document.createElement('div');
	eleCard.classList.add('team-card');
	eleCard.innerHTML = `
							<div class="card-image">
								<img src="img/${objMember.image}" alt="${objMember.name}" />
							</div>
							<div class="card-text">
								<h3>${objMember.name}</h3>
								<p>${objMember.role}</p>
							</div>
	`;
	eleCard.addEventListener('click', deleteMember);
	eleContainer.append(eleCard);
}

function addMemberToArray(objMember) {
	arrTeam.push(objMember);
}

function resetForm() {
	inputName.value = '';
	inputRole.value = '';
	inputImage.value = '';
}

function deleteMember() {
	const index = [...this.parentNode.children].indexOf(this); // l'indice della card nel container (nel DOM) è uguale a quello nell'array
	arrTeam.splice(index, 1); // rimuove 1 elemento a partire dalla posizione index nell'array (cioè rimuove l'elemento arrTeam[index])
	this.remove(); // rimuove l'elemento dal DOM
}