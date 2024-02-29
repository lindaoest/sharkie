let canvas;
let world;
let keyboard = new Keyboard();
let time_standing;

function init() {
	canvas = document.getElementById('canvas');
	initLevel();
	world = new World(canvas, keyboard, time_standing);

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
	if(event.keyCode == 68) {
		keyboard.key_attack = true;
	}
	time_standing = 0;
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
	if(event.keyCode == 68) {
		keyboard.key_attack = false;
	}
	time_standing = new Date().getTime();
})

function startGame() {
	document.querySelector('.startScreen').style.display = 'none';
	init();
}

function openFullscreen() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}