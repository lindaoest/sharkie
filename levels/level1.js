let level1;

//function initLevel erst aufrufen, wenn man auf den Startbildschirm gedrückt hat
function initLevel() {
	level1 = new Level(
		[
			new Pufferfish(),
			new Pufferfish(),
			new Pufferfish(),
			new Jellyfish(),
			new Jellyfish(),
			new Jellyfish(),
			new Endboss()
		],
		[
			new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0, 480),
			new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0, 500),
			new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0, 500),
			new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0, 500),
			new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0, 480),

			new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720, 480),
			new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720, 500),
			new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720, 500),
			new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720, 500),
			new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720, 480),

			new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 720 * 2, 480),
			new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 720 * 2, 500),
			new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720 * 2, 500),
			new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 720 * 2, 500),
			new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720 * 2, 480),

			new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720 * 3, 480),
			new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720 * 3, 500),
			new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720 * 3, 500),
			new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720 * 3, 500),
			new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720 * 3, 480)
		],
		[
			new Coins(500, 350),
			new Coins(500 + 30, 350 - 50),
			new Coins(500 + 100, 350 - 70),
			new Coins(500 + 150, 350 - 70),
			new Coins(500 + 210, 350 - 50),
			new Coins(500 + 250, 350),

			new Coins(1000, 150),
			new Coins(1000 + 50, 150 - 45),
			new Coins(1000 + 100, 150 - 90),
			new Coins(1000 + 150, 150 - 45),
			new Coins(1000 + 200, 150),
			new Coins(1000 + 150, 150 + 45),
			new Coins(1000 + 100, 150 + 90),
			new Coins(1000 + 50, 150 + 45),
		]
	)
}