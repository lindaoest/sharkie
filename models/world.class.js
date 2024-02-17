class World {
	character = new Character();
	enemies = [
		new Pufferfish(),
		new Pufferfish(),
		new Pufferfish()
	];
	backgroundObjects = [
		new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png'),
		new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png'),
		new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png')
	]
	water = new Water();
	light = new Light();
	canvas;
	keyboard;
	ctx;

	constructor(canvas, keyboard) {
		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.keyboard = keyboard
		this.draw();
		this.setWorld();
	}

	setWorld() {
		this.character.world = this.keyboard;
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		//Gehe Schichtenweise, das heißt zuerst kommt das hinterste Element und so geht es weiter bis man das vorderste einfügt
		this.addToMap(this.water);
		this.addObjectsToMap(this.backgroundObjects);
		this.addToMap(this.light);
		this.addToMap(this.character);
		this.addObjectsToMap(this.enemies);

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
		this.ctx.drawImage(mo.img, mo.position_x, mo.position_y, mo.width, mo.height);//zeichnet auf das Canvas Board
	}
}