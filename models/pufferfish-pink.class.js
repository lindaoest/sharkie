class Pufferfish_Pink extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
	];
	IMAGES_DEAD = [
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png',
	];
	enemy_spezies = '';
	diffX;
	diffY;
	stepX;
	stepY;

	constructor(spezies) {
		super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
		this.loadImages(this.IMAGES_SWIMMING);
		this.loadImages(this.IMAGES_DEAD);

		this.position_x = 2500;
		this.position_y = 0;
		this.width = 50;
		this.height = 60;
		this.enemy_spezies = spezies;

		this.animate();
	}

	animate() {
		setInterval(() => {
			if(!pauseGame) {
				if(this.pufferfishDead) {
					this.playAnimation(this.IMAGES_DEAD);
					this.position_x -= 40;
					this.position_y -= 40;
				} else {
					this.playAnimation(this.IMAGES_SWIMMING);
				}
				this.checkDifferenz();
			}
		}, 200);
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