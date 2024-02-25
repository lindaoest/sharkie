let canvas;
let world;
let keyboard = new Keyboard();

function init() {
	canvas = document.getElementById('canvas');
	initLevel();
	world = new World(canvas, keyboard);

	console.log('My moveable object', world);
}

window.addEventListener('keydown', (event) => {
	if(event.keyCode == 39) {
		keyboard.key_right = true;
	}
	if(event.keyCode == 37) {
		keyboard.key_left = true;
	}
	if(event.keyCode == 40) {
		keyboard.key_down = true;
	}
	if(event.keyCode == 38) {
		keyboard.key_up = true;
	}
	if(event.keyCode == 32) {
		keyboard.key_space = true;
	}
})

window.addEventListener('keyup', (event) => {
	if(event.keyCode == 39) {
		keyboard.key_right = false;
	}
	if(event.keyCode == 37) {
		keyboard.key_left = false;
	}
	if(event.keyCode == 40) {
		keyboard.key_down = false;
	}
	if(event.keyCode == 38) {
		keyboard.key_up = false;
	}
	if(event.keyCode == 32) {
		keyboard.key_space = false;
	}
})

function startGame() {
	document.querySelector('.startScreen').style.display = 'none';
	init();
}