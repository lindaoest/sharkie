let canvas;
let world;
let keyboard = new Keyboard();
let time_standing;
let sounds;
let pauseGame = false;
let muteAudioStorage;
let startTheGame = false;

getLocalStorage();
startTheGame = false;

/**
 * Retrieves muteAudio status from localStorage.
 * @function getLocalStorage
 */
function getLocalStorage() {
	if(localStorage.getItem('muteAudio')) {
		muteAudioStorage = JSON.parse(localStorage.getItem('muteAudio'));
	}
}

/**
 * Initializes the game.
 * @function init
 */
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

/**
 * Sets up touch events for mobile devices.
 * @function mobileTouchEvents
 */
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

	document.getElementById('btnSpace').addEventListener('touchstart', (e) => {
		e.preventDefault();
		keyboard.key_space = true;
		hurtPufferfishIsTrue();
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
		hurtPufferfishIsTrue();
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
	time_standing = new Date().getTime();
})

function hurtPufferfishIsTrue() {
	world.level.enemies.forEach((enemy) => {
		enemy.hurtPufferfish = true;
	})
}

/**
 * Initializes the game when started.
 * @function startGame
 */
function startGame() {
	startTheGame = true;
	document.querySelector('.startScreen').style.display = 'none';
	document.querySelector('.youwinScreen').style.display = 'none';
	document.querySelector('.gameoverScreen').style.display = 'none';
	checkMobileTouchbars();
	init();

	getLocalStorage();
	if(muteAudioStorage) {
		muteAudio();
	} else {
		playAudio();
	}
}

/**
 * Function to check the window width and display or hide the touchbars accordingly for mobile devices.
 * @function checkMobileTouchbars
 */
function checkMobileTouchbars() {
	if(window.innerWidth < 1000) {
		document.getElementById('touchbars').style.display = 'flex';
	} else {
		document.getElementById('touchbars').style.display = 'none';
	}
}

addEventListener("resize", () => {
	if(startTheGame) {
		checkMobileTouchbars();
	}
});


/**
 * Opens fullscreen mode.
 * @function openFullscreen
 */
function openFullscreen() {
	let fullscreen_element = document.getElementById('fullscreen-modus');
	document.getElementById('exit-fullscreen').classList.remove('d-none');
	document.getElementById('fullscreen').classList.add('d-none');
	enterFullscreen(fullscreen_element);
}

/**
 * Requests fullscreen mode for the given element.
 * @function enterFullscreen
 * @param {HTMLElement} element - The element to request fullscreen for.
 */
function enterFullscreen(element) {
	if(element.requestFullscreen) {
	  element.requestFullscreen();
	} else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
	  element.msRequestFullscreen();
	} else if(element.webkitRequestFullscreen) {  // iOS Safari
	  element.webkitRequestFullscreen();
	}
}

/**
 * Exits fullscreen mode.
 * @function closeFullscreen
 */
function closeFullscreen() {
	document.getElementById('fullscreen').classList.remove('d-none');
	document.getElementById('exit-fullscreen').classList.add('d-none');
	exitFullscreen();
}

/**
 * Exits fullscreen mode for the document.
 * @function exitFullscreen
 */
function exitFullscreen() {
	if (document.fullscreenElement || document.webkitFullscreenElement) {
	  if (document.exitFullscreen) {
		document.exitFullscreen();
	  } else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	  }
	}
}

/**
 * Opens the instructions.
 * @function openInstructions
 */
function openInstructions() {
	let instructions = document.getElementById('instructions');
	let closeInstructions = document.getElementById('instructions-close');
	let openInstructions = document.getElementById('instructions-open');
	instructions.style.display = 'flex';
	openInstructions.style.display = 'none';
	closeInstructions.style.display = 'flex';
}

/**
 * Closes the instructions.
 * @function closeInstructions
 */
function closeInstructions() {
	let instructions = document.getElementById('instructions');
	let closeInstructions = document.getElementById('instructions-close');
	let openInstructions = document.getElementById('instructions-open');
	instructions.style.display = 'none';
	openInstructions.style.display = 'flex';
	closeInstructions.style.display = 'none';
}

/**
 * Mutes all audio in the game.
 * @function muteAudio
 */
function muteAudio() {
	world.muteAudios();
	let muteAudio = document.getElementById('mute-audio');
	let playAudio = document.getElementById('play-audio');
	muteAudio.style.display = 'flex';
	playAudio.style.display = 'none';

	localStorage.setItem('muteAudio', JSON.stringify(true));
	getLocalStorage();
}


/**
 * Plays all audio in the game.
 * @function playAudio
 */
function playAudio() {
	world.playAudios();
	let muteAudio = document.getElementById('mute-audio');
	let playAudio = document.getElementById('play-audio');
	muteAudio.style.display = 'none';
	playAudio.style.display = 'flex';

	localStorage.setItem('muteAudio', JSON.stringify(false));
	getLocalStorage();
}

/**
 * Toggles the game between pause and play.
 * @function toggleGame
 */
function toggleGame() {
	let pauseGameButton = document.getElementById('pause-game');
	let playGameButton = document.getElementById('play-game');

	pauseGameButton.classList.toggle('d-none');
	playGameButton.classList.toggle('d-none');

	pauseGame = !pauseGame;
	if(pauseGame) {
		world.muteAudios();
	} else {
		if(!muteAudioStorage) {
			world.playAudios();
		}
	}
}

/**
 * Opens the controls section.
 * @function openControls
 */
function openControls() {
	let controls = document.getElementById('controls');
	let tips = document.getElementById('tips');
	let sources = document.getElementById('sources');

	controls.style.display = 'flex';
	tips.style.display = 'none';
	sources.style.display = 'none';
}

/**
 * Opens the tips section.
 * @function openTips
 */
function openTips() {
	let controls = document.getElementById('controls');
	let tips = document.getElementById('tips');
	let sources = document.getElementById('sources');

	controls.style.display = 'none';
	tips.style.display = 'flex';
	sources.style.display = 'none';
}

/**
 * Opens the sources section.
 * @function openSources
 */
function openSources() {
	let controls = document.getElementById('controls');
	let tips = document.getElementById('tips');
	let sources = document.getElementById('sources');

	controls.style.display = 'none';
	tips.style.display = 'none';
	sources.style.display = 'flex';
}

/**
 * Clears all intervals and restarts the game.
 * @function clearAllIntervals
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
	startGame();
}