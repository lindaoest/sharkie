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
		'sharkie_swimming': new Audio('audio/swim.mp3')
	}

	world = new World(canvas, keyboard, time_standing);

	console.log('My moveable object', world);

	mobileTouchEvents();
}

function mobileTouchEvents() {
	document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
		e.preventDefault();
		keyboard.key_left = true;
	})

	document.getElementById('btnLeft').addEventListener('touchend', (e) => {
		e.preventDefault();
		keyboard.key_left = false;
	})

	document.getElementById('btnRight').addEventListener('touchstart', (e) => {
		e.preventDefault();
		keyboard.key_right = true;
	})

	document.getElementById('btnRight').addEventListener('touchend', (e) => {
		e.preventDefault();
		keyboard.key_right = false;
	})
	document.getElementById('btnUp').addEventListener('touchstart', (e) => {
		e.preventDefault();
		keyboard.key_up = true;
	})

	document.getElementById('btnUp').addEventListener('touchend', (e) => {
		e.preventDefault();
		keyboard.key_up = false;
	})

	document.getElementById('btnDown').addEventListener('touchstart', (e) => {
		e.preventDefault();
		keyboard.key_down = true;
	})

	document.getElementById('btnDown').addEventListener('touchend', (e) => {
		e.preventDefault();
		keyboard.key_down = false;
	})

	document.getElementById('btnD').addEventListener('touchstart', (e) => {
		e.preventDefault();
		keyboard.key_attack = true;
	})

	document.getElementById('btnD').addEventListener('touchend', (e) => {
		e.preventDefault();
		keyboard.key_attack = false;
	})

	document.getElementById('btnSpace').addEventListener('touchstart', (e) => {
		e.preventDefault();
		keyboard.key_space = true;
	})

	document.getElementById('btnSpace').addEventListener('touchend', (e) => {
		e.preventDefault();
		keyboard.key_space = false;
	})
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
	if(event.keyCode = 27) {
		closeFullscreen();
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
	if(window.innerWidth < 800) {
		document.getElementById('touchbars').style.display = 'flex';
	}
	init();
}

function openFullscreen() {
	let fullscreen_element = document.getElementById('fullscreen-modus');
	document.getElementById('exit-fullscreen').classList.remove('d-none');
	document.getElementById('fullscreen').classList.add('d-none');
	enterFullscreen(fullscreen_element);
}

function enterFullscreen(element) {
	if(element.requestFullscreen) {
	  element.requestFullscreen();
	} else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
	  element.msRequestFullscreen();
	} else if(element.webkitRequestFullscreen) {  // iOS Safari
	  element.webkitRequestFullscreen();
	}
}

function closeFullscreen() {
	document.getElementById('fullscreen').classList.remove('d-none');
	document.getElementById('exit-fullscreen').classList.add('d-none');
	exitFullscreen();
}

function exitFullscreen() {
	if(document.exitFullscreen) {
	  document.exitFullscreen();
	} else if(document.webkitExitFullscreen) {
	  document.webkitExitFullscreen();
	}
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

function toggleGame() {
	let pauseGame = document.getElementById('pause-game');
	let playGame = document.getElementById('play-game');

	pauseGame.classList.toggle('d-none');
	playGame.classList.toggle('d-none');
	world.togglePause();
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