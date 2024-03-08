class World {
	character = new Character();
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
	flipBubble = 40;

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
		this.checkEnergy();
	}

	setWorld() {
		this.character.world = this;
		this.endboss.world = this;
		this.bubble_poisons.world = this;
		setInterval(() => this.enemysSwimAfterCharacter(), 300);
	}

	enemysSwimAfterCharacter() {
		this.endboss.positionCharacterX = this.character.position_x;
		this.endboss.positionCharacterY = this.character.position_y - this.character.height;
		this.level.enemies[25].positionCharacterX = this.character.position_x + 50;
		this.level.enemies[25].positionCharacterY = this.character.position_y + 80;
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.ctx.translate(this.camera_x, 0);

		//Gehe Schichtenweise, das heißt zuerst kommt das hinterste Element und so geht es weiter bis man das vorderste einfügt
		this.addObjectsToMap(this.level.backgroundObjects);
		this.addObjectsToMap(this.level.coins);
		this.addObjectsToMap(this.level.poisons);
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
		if(mo.otherDirection || mo.bubbleOtherDirection) {
			this.flipImage(mo);
		}

		this.ctx.drawImage(mo.img, mo.position_x, mo.position_y, mo.width, mo.height); //zeichnet auf das Canvas Board

		if(mo.otherDirection || mo.bubbleOtherDirection) {
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
		this.ctx.restore(); //Das Spiegeln wieder rückgängig machen, damit die anderen Bilder nicht auch gespiegelt werden
	}

	checkAttacks() {
		setInterval(() => this.createBubble(), 200);
	}

	createBubble() {
		if(this.keyboard.key_attack && this.character.startBubbleAttack) {
			if(this.character.bubbleOtherDirection) {
				if(this.character.poison == 0) {
					this.bubble_poisons.push(new BubblePoison((this.character.position_x + this.character.width) - this.flipBubble, (this.character.position_y + this.character.height) - 90, 'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png', false, 'otherDirection'));
				} else {
					this.bubble_poisons.push(new BubblePoison((this.character.position_x + this.character.width) - this.flipBubble, (this.character.position_y + this.character.height) - 90, 'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png', true, 'otherDirection'));
				}
			} else {
				if(this.character.poison == 0) {
					this.bubble_poisons.push(new BubblePoison((this.character.position_x + this.character.width) - this.flipBubble, (this.character.position_y + this.character.height) - 90, 'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png', false, 'normalDirection'));
				} else {
					this.bubble_poisons.push(new BubblePoison((this.character.position_x + this.character.width) - this.flipBubble, (this.character.position_y + this.character.height) - 90, 'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png', true, 'normalDirection'));
				}
			}
		}
	}

	checkAttackOnJellyfish() {
		setInterval(() => {
			this.bubble_poisons.forEach((bubble_poison) => {
				this.level.enemies.forEach((enemy) => {
					if(bubble_poison.isColliding(enemy) && enemy['enemy_spezies'] == 'jellyfish' && bubble_poison.isWithPoison) {
						enemy.jellyfishIsHitted();
						this.bubble_poisons.splice(bubble_poison, 1);
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
				this.checkCollisionPufferfish(enemy);
			})
			this.checkCollisionEndboss();
		}, 1000);
	}

	checkCollisionPufferfish(enemy) {
		if(this.character.isColliding(enemy) && enemy['enemy_spezies'] == 'pufferfish') {
			if(enemy.hurtPufferfish) {
				enemy.pufferfishIsHitted();
			}
		}
	}

	checkCollisionEndboss() {
		if(this.character.isColliding(this.endboss)) {
			this.character.hit(5);
			this.statusbar_energy.setPercentageHeart(this.character.energy);
		}
	}

	getCoins() {
		setInterval(() => {
			sounds.coin_audio.muted = true;
			for (let i = 0; i < this.level.coins.length; i++) {
				let coin = this.level.coins[i];
				if (this.character.isColliding(coin)) {
					this.level.coins.splice(i, 1);
					this.character.getCoin();
					this.playCoinsSound();
					this.statusbar_coins.setPercentageCoins(this.character.coins);
					i--; // Verringere den Index, da das Array sich jetzt verschoben hat
				}
			}
		}, 200);
	}

	playCoinsSound() {
		sounds.coin_audio.currentTime = 0;
		if(!this.sound_is_muted) {
			sounds.coin_audio.muted = false;
			sounds.coin_audio.play();
		}
	}

	getPoison() {
		setInterval(() => {
			sounds.poison_audio.muted = true;
			for (let i = 0; i < this.level.poisons.length; i++) {
				let poison = this.level.poisons[i];
				if (this.character.isColliding(poison)) {
					this.level.poisons.splice(i, 1);
					this.character.getPoison();
					this.playPoisonSound();
					this.statusbar_poison.setPercentagePoison(this.character.poison);
					i--;
				}
			}
		}, 200);
	}

	playPoisonSound() {
		sounds.poison_audio.currentTime = 0;
		if(!this.sound_is_muted) {
			sounds.poison_audio.muted = false;
			sounds.poison_audio.play();
		}
	}

	animateEndboss() {
		setInterval(() => {
			if(this.character.position_x > 2090) {
				if(this.endboss.firstContact && !this.sound_is_muted) {
					this.playEndbossSound();
				}
				this.endboss.firstContactEndboss();
			}
		}, 200);
	}

	playEndbossSound() {
		sounds.background_audio.muted = true;
		sounds.action_audio.muted = false;
		sounds.action_audio.play();
		sounds.action_audio.loop = true;
	}

	checkAttackOnEndboss() {
		setInterval(() => {
			this.bubble_poisons.forEach((bubble_poison) => {
				if(bubble_poison.isColliding(this.endboss)) {
					this.endboss.hit(20);
					this.endboss.endbossIsHitted();
					this.bubble_poisons.splice(bubble_poison, 1);
				}
			})
		}, 1000);
	}

	addBackgroundSound() {
		sounds.background_audio.muted = false;
		sounds.background_audio.play();
		sounds.background_audio.loop = true;
	}

	playAudios() {
		if(this.character.position_x > 2090 || this.endboss.firstContact) {
			sounds.action_audio.muted = false;
			sounds.action_audio.play();
			sounds.action_audio.loop = true;
		} else {
			sounds.background_audio.muted = false;
			sounds.background_audio.play();
			sounds.background_audio.loop = true;
		}
		this.sound_is_muted = false;
    }

	muteAudios() {
		sounds.background_audio.muted = true;
		sounds.background_audio.loop = false;
		sounds.action_audio.muted = true;
		sounds.action_audio.loop = false;

		this.sound_is_muted = true;
    }

	checkEnergy() {
		setInterval(() => {
			if(this.character.energy <= 0) {
				this.youLost();
			} else if(this.endboss.energy <= 0) {
				this.youWin();
			}
		}, 200);
	}

	youLost() {
		setTimeout(() => {
			document.getElementById('gameover').style.display = 'flex';
			this.muteAudios();
		}, 2000);
	}

	youWin() {
		setTimeout(() => {
			document.getElementById('youwin').style.display = 'flex';
			this.muteAudios();
		}, 2000)
	}
}