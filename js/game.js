let canvas;
let world;
let keyboard = new Keyboard();
let time_standing;
let sounds;

function init() {
	canvas = document.getElementById('canvas');
	initLevel();

	sounds = {
		'coin_audio': new Audio('audio/coins.mp3'),
		'poison_audio': new Audio('audio/poison.mp3'),
		'background_audio': new Audio('audio/background-sound.mp3'),
		'action_audio': new Audio('audio/action-sound.mp3'),
		'whale_audio': new Audio('audio/whale.mp3'),
		'electricity_audio': new Audio('audio/electricity.mp3'),
	}

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

function openInstructions() {
	let instructions = document.getElementById('instructions');
	let closeInstructions = document.getElementById('instructions-close');
	let openInstructions = document.getElementById('instructions-open');
	instructions.style.display = 'flex';
	openInstructions.style.display = 'none';
	closeInstructions.style.display = 'flex';
}

function closeInstructions() {
	let instructions = document.getElementById('instructions');
	let closeInstructions = document.getElementById('instructions-close');
	let openInstructions = document.getElementById('instructions-open');
	instructions.style.display = 'none';
	openInstructions.style.display = 'flex';
	closeInstructions.style.display = 'none';
}

function muteAudio() {
	world.muteAudios();
	let muteAudio = document.getElementById('mute-audio');
	let playAudio = document.getElementById('play-audio');
	muteAudio.style.display = 'flex';
	playAudio.style.display = 'none';
}

function playAudio() {
	world.playAudios();
	let muteAudio = document.getElementById('mute-audio');
	let playAudio = document.getElementById('play-audio');
	muteAudio.style.display = 'none';
	playAudio.style.display = 'flex';
}

function playGame() {
	let pauseGame = document.getElementById('pause-game');
	let playGame = document.getElementById('play-game');

	pauseGame.style.display = 'none';
	playGame.style.display = 'flex';
}

function pauseGame() {
	let pauseGame = document.getElementById('pause-game');
	let playGame = document.getElementById('play-game');

	pauseGame.style.display = 'flex';
	playGame.style.display = 'none';
}

function openControls() {
	let controls = document.getElementById('controls');
	let tips = document.getElementById('tips');
	let sources = document.getElementById('sources');

	controls.style.display = 'flex';
	tips.style.display = 'none';
	sources.style.display = 'none';
}

function openTips() {
	let controls = document.getElementById('controls');
	let tips = document.getElementById('tips');
	let sources = document.getElementById('sources');

	controls.style.display = 'none';
	tips.style.display = 'flex';
	sources.style.display = 'none';
}

function openSources() {
	let controls = document.getElementById('controls');
	let tips = document.getElementById('tips');
	let sources = document.getElementById('sources');

	controls.style.display = 'none';
	tips.style.display = 'none';
	sources.style.display = 'flex';
}