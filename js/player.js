/* Player.js
*
*
*/

function Player(game){
	this.game = game;
	this.sprite = 'null';
	this.x = game.world.centerX;
	this.y = game.world.bounds.height / 3;
	this.velX = 1;
	this.velY = 1;
}

Player.prototype.create = function(){

	// Add the player to the stage
	this.sprite = this.game.add.sprite(this.x, this.y, 'player');

	// Set the centre point of the sprite
	this.sprite.anchor.setTo(0.5, 0.5);
	
	this.sprite.animations.add('swim', Phaser.Animation.generateFrameNames('penguinswim', 0, 11, '', 4), 12, true);
	this.sprite.animations.play('swim');

}

Player.prototype.update = function(){

}

// Add animation states and transitions

// Collision detection