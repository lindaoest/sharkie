let level1;

//function initLevel erst aufrufen, wenn man auf den Startbildschirm gedrückt hat
function initLevel() {
	level1 = new Level(
		[
			new Pufferfish('pufferfish', 500, 400),
			new Pufferfish('pufferfish', 500, 400),
			new Pufferfish('pufferfish', 500, 400),

			new Jellyfish('jellyfish', 520, 210),
			new Jellyfish('jellyfish', 600, 210),
			new Jellyfish('jellyfish', 680, 210),

			new Jellyfish_Purple('jellyfish', 700, 90),
			new Jellyfish_Purple('jellyfish', 780, 60),
			new Jellyfish_Purple('jellyfish', 860, 30),

			new Jellyfish_Dangerous('jellyfish', 1580, 90),
			new Jellyfish_Dangerous('jellyfish', 1500, 150),
			new Jellyfish_Dangerous('jellyfish', 1580, 210),

			new Pufferfish('pufferfish', 1900, 400),
			new Pufferfish('pufferfish', 1900, 400),
			new Pufferfish('pufferfish', 1900, 400),
			new Pufferfish('pufferfish', 1900, 400),

			new Jellyfish_Purple('jellyfish', 2020, 140),
			new Jellyfish_Purple('jellyfish', 2100, 120),
			new Jellyfish_Purple('jellyfish', 2180, 90),
			new Jellyfish_Purple('jellyfish', 2260, 60),
			new Jellyfish_Purple('jellyfish', 2340, 30),

			new Pufferfish('pufferfish', 2300, 400),
			new Pufferfish('pufferfish', 2300, 400),
			new Pufferfish('pufferfish', 2300, 400),
			new Pufferfish('pufferfish', 2300, 400),

			new Pufferfish_Pink('pufferfish'),
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
			new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720 * 3, 480),

			new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 720 * 4, 480),
			new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 720 * 4, 500),
			new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720 * 4, 500),
			new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 720 * 4, 500),
			new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720 * 4, 480),
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

			new Coins(1300, 150),
			new Coins(1300 + 50, 150 - 45),
			new Coins(1300 + 100, 150 - 90),
			new Coins(1300 + 150, 150 - 45),
			new Coins(1300 + 200, 150),
			new Coins(1300 + 150, 150 + 45),
			new Coins(1300 + 100, 150 + 90),
			new Coins(1300 + 50, 150 + 45),

			new Coins(1600, 350),
			new Coins(1600 + 30, 350 - 50),
			new Coins(1600 + 100, 350 - 70),
			new Coins(1600 + 150, 350 - 70),
			new Coins(1600 + 210, 350 - 50),
			new Coins(1600 + 250, 350),

			new Coins(1900, 50),
			new Coins(1900 + 50, 50 + 50),
			new Coins(1900 + 100, 50 + 70),
			new Coins(1900 + 150, 50 + 70),
			new Coins(1900 + 210, 50 + 50),
			new Coins(1900 + 250, 50),
		],
		[
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
		]
	)
}