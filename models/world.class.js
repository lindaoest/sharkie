class World {
	character = new Character();
	poisons = [
		new Poison('img/4. Marcadores/Posión/Dark - Right.png', 610, 320),
		new Poison('img/4. Marcadores/Posión/Animada/1.png', 1080, 100, true),
		new Poison('img/4. Marcadores/Posión/Animada/1.png', 1380, 100, true),
		new Poison('img/4. Marcadores/Posión/Dark - Right.png', 1710, 320),
		new Poison('img/4. Marcadores/Posión/Animada/1.png', 2000, 20, true),
		new Poison('img/4. Marcadores/Posión/Animada/1.png', 700, 60, true),
		new Poison('img/4. Marcadores/Posión/Dark - Right.png', 900, 300),
		new Poison('img/4. Marcadores/Posión/Dark - Right.png', 1380, 320),
		new Poison('img/4. Marcadores/Posión/Animada/1.png', 2300, 80, true),
		new Poison('img/4. Marcadores/Posión/Dark - Right.png', 210, 350),
	];
	endboss = new Endboss();
	bubble_poisons = [];
	statusbar_coins = new StatusbarCoins(20, 10, 0);
	statusbar_energy = new StatusbarEnergy(20, 40, 100);
	statusbar_poison = new StatusbarPoison(20, 80, 0);
	level = level1;
	canvas;
	keyboard;
	ctx;
	camera_x = 0;
	time_standing;
	sound_is_muted = false;
	paused = false;

	constructor(canvas, keyboard, time_standing) {
		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.time_standing = time_standing;
		this.draw();
		this.setWorld();
		this.checkCollisions();
		this.getCoins();
		this.getPoison();
		this.checkAttacks();
		this.checkAttackOnJellyfish();
		this.animateEndboss();
		this.checkAttackOnEndboss();
		this.addBackgroundSound();
	}

	setWorld() {
		this.character.world = this;
		this.endboss.world = this;

		setInterval(() => {
			this.endboss.positionCharacterX = this.character.position_x;
			this.endboss.positionCharacterY = this.character.position_y - this.character.height;
			this.level.enemies[25].positionCharacterX = this.character.position_x;
			this.level.enemies[25].positionCharacterY = this.character.position_y;
		}, 300);
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.ctx.translate(this.camera_x, 0);

		//Gehe Schichtenweise, das heißt zuerst kommt das hinterste Element und so geht es weiter bis man das vorderste einfügt
		// this.addToMap(this.water);
		this.addObjectsToMap(this.level.backgroundObjects);

		// this.addToMap(this.light);
		this.addObjectsToMap(this.level.coins);
		this.addObjectsToMap(this.poisons);
		this.addToMap(this.character);
		this.addToMap(this.endboss);
		this.addObjectsToMap(this.level.enemies);
		this.addObjectsToMap(this.bubble_poisons);

		this.ctx.translate(-this.camera_x, 0);
		this.addToMap(this.statusbar_coins);
		this.addToMap(this.statusbar_energy);
		this.addToMap(this.statusbar_poison);
		this.ctx.translate(this.camera_x, 0);

		this.ctx.translate(-this.camera_x, 0);

		//Wird erst ausgeführt wenn das obere gezeichnet wurde
		//In dieser Funktion erkennt es das this nicht mehr
		let self = this;
		requestAnimationFrame(function() {
			self.draw();
		}); //Die function draw wird so oft ausgeführt, wie es die Grafikkarte vom Benutzer hergibt. Z.b. bei schlechter Karte 10-15 Mal pro Sekunde und es geht bis zu 25 oder 60 Mal pro Sekunde (Bilder werden so oft geladen)
	}

	addObjectsToMap(objects) {
		objects.forEach(o => {
			this.addToMap(o)
		})
	}

	addToMap(mo) {
		if(mo.otherDirection) {
			this.flipImage(mo);
		}

		this.ctx.drawImage(mo.img, mo.position_x, mo.position_y, mo.width, mo.height);//zeichnet auf das Canvas Board

		if(mo instanceof Character) {
			this.ctx.beginPath();
			this.ctx.lineWidth = '5';
			this.ctx.strokeStyle = 'blue';
			this.ctx.rect(mo.position_x, mo.position_y, mo.width, mo.height);
			this.ctx.stroke();
		}

		if(mo.otherDirection) {
			this.flipImageBack(mo);
		}
	}

	flipImage(mo) {
		this.ctx.save(); //Aktuellen status des context speichern
		this.ctx.translate(mo.width, 0); //dreht das Bild, x und y Achse
		this.ctx.scale(-1, 1); //Spiegeln die Bilder und drehen sie bei der X-Achse um
		mo.position_x = mo.position_x * -1; //Somit bleibt das Bild an genau der X Koordinate, an der wir das Bild gedreht haben
	}

	flipImageBack(mo) {
		mo.position_x = mo.position_x * -1;
		this.ctx.restore(); //Das Spiegeln wieder rückläufig machen, damit die anderen Bilder nicht auch gespiegelt werden
	}

	checkAttacks() {
		setInterval(() => {
			if(this.keyboard.key_attack) {
				if(this.character.poison == 0) {
					this.bubble_poisons.push(new BubblePoison((this.character.position_x + this.character.width) - 40, (this.character.position_y + this.character.height) - 90, 'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png', false));
				} else {
					this.bubble_poisons.push(new BubblePoison((this.character.position_x + this.character.width) - 40, (this.character.position_y + this.character.height) - 90, 'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png', true));
				}
			}
		}, 1000);
	}

	checkAttackOnJellyfish() {
		setInterval(() => {
			this.bubble_poisons.forEach((bubble_poison) => {
				this.level.enemies.forEach((enemy) => {
					if(bubble_poison.isColliding(enemy) && enemy['enemy_spezies'] == 'jellyfish' && bubble_poison.isWithPoison) {
						enemy.jellyfishIsHitted();
						this.bubble_poisons.splice(bubble_poison, 1);
					}
					if(this.character.isColliding(enemy) && enemy['enemy_spezies'] == 'pufferfish') {
						enemy.pufferfishIsHitted();
					}
				})
			})
		}, 1000);
	}

	checkCollisions() {
		setInterval(() => {
			this.level.enemies.forEach((enemy) => {
				if(this.character.isColliding(enemy)) {
					this.character.hit(5, enemy.enemy_spezies);
					this.statusbar_energy.setPercentageHeart(this.character.energy);
				}
			})
			if(this.character.isColliding(this.endboss)) {
				this.character.hit(5);
				this.statusbar_energy.setPercentageHeart(this.character.energy);
			}
		}, 1000);
	}

	getCoins() {
		setInterval(() => {
			sounds.coin_audio.pause();
			sounds.coin_audio.currentTime = 0;
			// Iteriere über alle Münzen im Level
			for (let i = 0; i < this.level.coins.length; i++) {
				let coin = this.level.coins[i];
				// Überprüfe, ob der Charakter mit dieser Münze kollidiert
				if (this.character.isColliding(coin)) {
					// Entferne die Münze aus dem Level
					this.level.coins.splice(i, 1);
					// Aktualisiere den Münzzähler des Charakters
					this.character.getCoin();
					// Sound
					if(!this.sound_is_muted) {
						sounds.coin_audio.play();
					}
					// Aktualisiere die Statusleiste für Münzen
					this.statusbar_coins.setPercentageCoins(this.character.coins);
					// Verringere den Index, da das Array sich jetzt verschoben hat
					i--;
				}
			}
		}, 200);
	}

	getPoison() {
		setInterval(() => {
			sounds.poison_audio.pause();
			for (let i = 0; i < this.poisons.length; i++) {
				let poison = this.poisons[i];
				if (this.character.isColliding(poison)) {
					this.poisons.splice(i, 1);
					this.character.getPoison();
					sounds.poison_audio.currentTime = 0;
					setTimeout(() => {
						if(!this.sound_is_muted) {
							sounds.poison_audio.play();
						}
					}, 100); // Starten Sie den Sound mit einer Verzögerung von 100 Millisekunden
					this.statusbar_poison.setPercentagePoison(this.character.poison);
					i--;
				}
			}
		}, 200);
	}

	animateEndboss() {
		setInterval(() => {
			if(this.character.position_x > 2090) {
				if(this.endboss.firstContact && !this.sound_is_muted) {
					sounds.background_audio.pause();
					sounds.action_audio.play();
					sounds.action_audio.loop = true;
				}
				this.endboss.firstContactEndboss();
			}
		}, 200);
	}

	checkAttackOnEndboss() {
		setInterval(() => {
			this.bubble_poisons.forEach((bubble_poison) => {
				if(bubble_poison.isColliding(this.endboss)) {
					this.endboss.hit(20);
					this.endboss.endbossIsHitted();
				}
			})
		}, 1000);
	}

	addBackgroundSound() {
		sounds.background_audio.play();
		sounds.background_audio.loop = true;
	}

	playAudios() {
		if(this.character.position_x > 2090 || this.endboss.firstContact) {
			sounds.action_audio.play();
			sounds.action_audio.loop = true;
		} else {
			sounds.background_audio.play();
			sounds.background_audio.loop = true;
		}
		this.sound_is_muted = false;
    }

	muteAudios() {
		sounds.background_audio.pause();
		sounds.background_audio.loop = false;
		sounds.action_audio.pause();
		sounds.action_audio.loop = false;

		this.sound_is_muted = true;
		sounds.electricity_audio.pause();
    }

	// togglePause() {
	// 	if(!this.paused) {
	// 		this.pauseGame();
	// 	} else if(this.paused) {
	// 		this.resumeGame();
	// 	}
	// }

	// pauseGame() {
    //     // Hintergrundsound anhalten
    //     if (!this.endboss.firstContact) {
    //         sounds.background_audio.pause();
    //     } else {
    //         sounds.action_audio.pause();
    //     }

    //     // Alle Intervalle stoppen
    //     clearInterval(this.checkAttacksInterval);
    //     clearInterval(this.checkAttackOnJellyfishInterval);
    //     clearInterval(this.checkCollisionsInterval);
    //     clearInterval(this.getCoinsInterval);
    //     clearInterval(this.getPoisonInterval);
    //     clearInterval(this.animateEndbossInterval);
    //     clearInterval(this.checkAttackOnEndbossInterval);

    //     // Animationen pausieren
    //     this.paused = true;
    // }

    // resumeGame() {
    //     // Hintergrundsound fortsetzen
    //     if (!this.endboss.firstContact) {
    //         sounds.background_audio.play();
    //     } else {
    //         sounds.action_audio.play();
    //     }

    //     // Intervalle wieder starten
    //     this.checkAttacksInterval = setInterval(() => {
    //         // Ihre Funktion für checkAttacks
    //     }, 1000);

    //     this.checkAttackOnJellyfishInterval = setInterval(() => {
    //         // Ihre Funktion für checkAttackOnJellyfish
    //     }, 1000);

    //     // Weitere Intervalle hier starten...

    //     // Animationen fortsetzen
    //     this.paused = false;
    // }
}