class OverviewCanvas {

	constructor(canvasElement, images) {

		// canvas
		this.canvas = canvasElement;
		this.ctx = this.canvas.getContext('2d');
		this.bounds = this.canvas.getBoundingClientRect()


		// images
		this.images = images;
	
		// setup
		this.setCanvasSize()
		this.setEventListeners()

		// draw an image after 1 second
		setTimeout( () => this.draw(), 1000)
	}

	setCanvasSize () {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight*3;
		this.draw()
	}

	setEventListeners () {
		// add scroll and resize event listeners
		document.addEventListener('scroll', () => this.draw())
		window.addEventListener('resize', () => this.setCanvasSize() )
		this.draw()
	}

	draw () {

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

		let imageIndex = 0;
		let offsetTop = 0;

		if ( this.canvas.offsetTop - window.scrollY <= 0 ) {
			
			let relativeScollPosition = (this.canvas.offsetTop - window.scrollY) * -1;

			offsetTop = relativeScollPosition;

			let imageIndexDivider = this.images.length/(this.canvas.height-this.images[0].height);
			imageIndex = Math.floor( relativeScollPosition * imageIndexDivider )

			if ((this.canvas.height - this.images[0].height - relativeScollPosition) < 0) {
				offsetTop = this.canvas.height - this.images[0].height	
			}

			if (imageIndex >= this.images.length) {
				imageIndex = this.images.length - 1;
			} 
		}

		let imageSizeRatio = window.innerWidth / this.images[0].width;

		// let imageSizeRatio = 0;
		// if (window.innerWidth > window.innerHeight) {
		// 	imageSizeRatio = window.innerWidth / this.images[0].width;
		// }
		// else {
		// 	imageSizeRatio = window.innerHeight / this.images[0].height;
		// }

		this.ctx.drawImage(this.images[imageIndex], 0, offsetTop, this.images[0].width * imageSizeRatio, this.images[0].height * imageSizeRatio);

	}

}



// ----- ------ ----- -----
// COASTER CANVAS
// ----- ------ ----- -----

class CoasterCanvas {

	constructor(canvasElement, images) {

		// canvas
		this.canvas = canvasElement;
		this.ctx = this.canvas.getContext('2d');
		this.bounds = this.canvas.getBoundingClientRect()


		// images
		this.images = images;
		this.imageCounter = 0;
		this.reverseAnimation = false;

		console.log(this.images.length)

	
		// setup
		this.setCanvasSize()

		// draw an image after 1 second
		setTimeout( () => this.draw(), 1000)
	}

	setCanvasSize () {
		this.canvas.width = this.images[0].width/1.5;
		this.canvas.height = this.images[0].height/1.5;
		this.draw()
	}

	draw () {

		if (this.imageCounter <= 0) {
			this.reverseAnimation = false;
		}
		else if (this.imageCounter >= this.images.length-1) {
			this.reverseAnimation = true;
		}

		if (!this.reverseAnimation) {
			this.imageCounter = this.imageCounter + 1;
		}
		else {
			this.imageCounter = this.imageCounter - 1;
		}


		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.ctx.drawImage(this.images[this.imageCounter], 0, 0, this.canvas.width , this.canvas.height);

		requestAnimationFrame(() => this.draw())

	}

}

export { OverviewCanvas, CoasterCanvas };
