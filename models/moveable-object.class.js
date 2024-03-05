class MoveableObject extends DrawableObject {
	speed = 0.15;
	otherDirection = false;
	energy = 100;
	lastHit = 0;
	enemy_spezies = '';
	jellyfishDead = false;
	pufferfishDead = false;
	firstContact = false;
	endbossHitted = false;
	coins = 0;
	poison = 0;
	positionCharacterX;
	positionCharacterY;
	hurtPufferfish = false;
	bubbleOtherDirection = false;
	intervalIds = [];
	enemy_spezies = '';
	changeDirection = false;

	offset = {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};

	moveLeft() {
		setInterval(() => {
			if(!pauseGame) {
				this.position_x -= this.speed;
			}
		}, 1000 / 60);
	}

	// this.character.isColliding(this.pufferfish)
	//Berechnung ob sich die Rechtecke vom Character und den Enemies sich überkreuzen
	isColliding (obj) {
		return  (this.position_x + this.width) - this.offset.right >= obj.position_x &&
				this.position_x + this.offset.left <= (obj.position_x + obj.width) &&
				(this.position_y + this.height)  - this.offset.bottom >= obj.position_y &&
				this.position_y + this.offset.top <= (obj.position_y + obj.height) //&&
				//obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

	}

	hit(energy, spezies) {
		this.energy -= energy;
		if(this.energy < 0) {
			this.energy = 0;
		} else {
			this.lastHit = new Date().getTime();
			this.enemy_spezies = spezies;
		}
	}

	isHurt() {
		//Differenz in Sekunden
		let timepassed = new Date().getTime() - this.lastHit;
		timepassed = timepassed / 1000;
		return timepassed < 1; //gibt true aus oder false
	}

	hitPufferfish() {
		if(this.enemy_spezies == 'pufferfish') {
			return this.enemy_spezies === 'pufferfish';
		}
	}

	hitJellyfish() {
		if(this.enemy_spezies == 'jellyfish') {
			return this.enemy_spezies === 'jellyfish';
		}
	}

	jellyfishIsHitted() {
		this.jellyfishDead = true;
	}

	pufferfishIsHitted() {
		this.pufferfishDead = true;
	}

	// return true or false
	isDead() {
		return this.energy == 0;
	}

	firstContactEndboss() {
		this.firstContact = true;
	}

	endbossIsHitted() {
		this.endbossHitted = true;
	}

	/**
   * adds an interval to the functions and stores the id of the intervals in an array
   * @param {function} fn - function which is to be executed in intervals
   * @param {number} time - interval time
   */
	setStoppableInterval(fn, time) {
		let id = setInterval(fn, time);
		this.intervalIds.push(id);
	}

	checkDifferenz() {
		if(this.positionCharacterX != undefined && this.positionCharacterY != undefined) {
			// Unterschiede zwischen Endboss- und Zielkoordinaten berechnen
			this.diffX = this.positionCharacterX - this.position_x;
			this.diffY = this.positionCharacterY - this.position_y;

			// Die Schrittgröße für die Bewegung des Endbosses festlegen
			this.stepX = this.diffX > 0 ? Math.min(10, this.diffX) : Math.max(-10, this.diffX);
			this.stepY = this.diffY > 0 ? Math.min(10, this.diffY) : Math.max(-10, this.diffY);

			if(this.stepX > 0) {
				this.otherDirection = true;
			} else {
				this.otherDirection = false;
			}

			// Endboss-Position aktualisieren
			this.position_x += this.stepX;
			this.position_y += this.stepY;
		}
	}
}