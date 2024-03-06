class Pufferfish_Pink extends MoveableObject {
	IMAGES_SWIMMING = [
		'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
	];
	IMAGES_DEAD = [
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png',
		'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png',
	];
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
		this.width = 70;
		this.height = 55;
		this.enemy_spezies = spezies;

		this.animate();
	}

	animate() {
		setInterval(() => this.playPufferfish(), 200);
	}

	playPufferfish() {
		if(!pauseGame) {
			if(this.pufferfishDead) {
				this.deadAnimation();
			} else {
				this.playAnimation(this.IMAGES_SWIMMING);
			}
			this.checkDifferenz();
		}
	}

	deadAnimation() {
		this.playAnimation(this.IMAGES_DEAD);
		this.position_x -= 40;
		this.position_y -= 40;
	}
}