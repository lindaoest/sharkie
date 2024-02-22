class World {
	character = new Character();
	level = level1;
	// water = new Water();
	// light = new Light();
	canvas;
	keyboard;
	ctx;
	camera_x = 0;

	constructor(canvas, keyboard) {
		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.draw();
		this.setWorld();
		this.checkCollisions();
	}

	setWorld() {
		this.character.world = this;
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.ctx.translate(this.camera_x, 0);

		//Gehe Schichtenweise, das heißt zuerst kommt das hinterste Element und so geht es weiter bis man das vorderste einfügt
		// this.addToMap(this.water);
		this.addObjectsToMap(this.level.backgroundObjects);
		// this.addToMap(this.light);
		this.addToMap(this.character);
		this.addObjectsToMap(this.level.enemies);

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

		if(mo instanceof Character || mo instanceof Pufferfish) {
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
		mo.position_x = mo.position_x * -1;
	}

	flipImageBack(mo) {
		mo.position_x = mo.position_x * -1;
		this.ctx.restore(); //Das Spiegeln wieder rückläufig machen, damit die anderen Bilder nicht auch gespiegelt werden
	}

	checkCollisions() {
		setInterval(() => {
			this.level.enemies.forEach((enemy) => {
				if(this.character.isColliding(enemy)) {
					console.log('Collision', enemy);
					this.character.energy -= 5;
				}
			})
		}, 1000);
	}
}