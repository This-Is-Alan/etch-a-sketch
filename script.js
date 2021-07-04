const container = document.getElementById('container');
const clear = document.getElementById('clear');
const changeSize = document.getElementById('size');

// sets default size of grid
resetGrid();

// creates a grid 
function makeGrid(grid) {
	container.innerHTML = "";

	for (let i = 0; i < (grid * grid); i++) {
		const gridItem = document.createElement('div');
		gridItem.classList = 'gridItem';
		gridItem.addEventListener("mouseenter", changeColor);
		gridItem.addEventListener("click", newColor);
		container.appendChild(gridItem);
	};
};

function defaultGridSize(grid) {
	container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
}

function resetGrid() {
	defaultGridSize(16);
	makeGrid(16);
}

// function creating new grid size from user's input
function newGridSize() {
	let pickSize = prompt('Enter a Number');
	if (pickSize === null) return;

	pickSize = parseInt(pickSize);
	if (pickSize < 1 || pickSize > 64 || Number.isNaN(pickSize)) {
		alert("Enter a number from 1-64 range");
		newGridSize();
	} else {
		clearGrid();
		defaultGridSize(pickSize);
		makeGrid(pickSize);
	}
}

// clears default grid
function clearGrid() {
	const gridArray = Array.from(container.childNodes);
	gridArray.forEach((element) => {
		container.removeChild(element);
	});
}

function changeColor(e) {
	e.target.style.backgroundColor = 'black';
}

// creates a random color when clicked
function newColor(e) {
	const randomR = Math.floor(Math.random() * 256);
	const randomG = Math.floor(Math.random() * 256);
	const randomB = Math.floor(Math.random() * 256);
	e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

// refreshes page
clear.addEventListener('click', resetGrid);

// opens prompt window for user
changeSize.addEventListener('click', newGridSize);