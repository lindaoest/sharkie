class World {
	character = new Character();
	enemies = [
		new Pufferfish(),
		new Pufferfish(),
		new Pufferfish()
	];
	canvas;
	ctx;

	constructor(canvas) {
		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.draw();
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.ctx.drawImage(this.character.img, this.character.position_x, this.character.position_y, this.character.width, this.character.height); //zeichnet auf das Canvas Board
		this.enemies.forEach(enemy => {
			this.ctx.drawImage(enemy.img, enemy.position_x, enemy.position_y, enemy.width, enemy.height)
		})

		//wird erst ausgeführt wenn das obere gezeichnet wurde
		//In dieser Funktion erkennt es das this nicht mehr
		let self = this;
		requestAnimationFrame(function() {
			self.draw();
		}); //Die function draw wird so oft ausgeführt, wie es die Grafikkarte vom Benutzer hergibt. Z.b. bei schlechter Karte 10-15 Mal pro Sekunde und es geht bis zu 25 oder 60 Mal pro Sekunde (Bilder werden so oft geladen)
	}
}