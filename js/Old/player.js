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
	this.speed = -50;
}

Player.prototype.create = function(){

	// Add the player to the stage
	this.sprite = this.game.add.sprite(this.x, this.y, 'player');

	// Set the centre point of the sprite
	this.sprite.anchor.setTo(0.5, 0.5);
	
	this.sprite.animations.add('swim', Phaser.Animation.generateFrameNames('penguinswim', 0, 11, '', 4), 12, true);
	this.sprite.animations.play('swim');
	
	// Setup camera
 	//this.sprite.fixedToCamera = true;
    //this.sprite.cameraOffset.x = 300;
    //this.sprite.cameraOffset.y = 500;
    this.game.camera.target = this.sprite;
    console.log(this.sprite);
    //this.game.camera.follow(this.sprite);
}

Player.prototype.update = function(){

}

Player.prototype.velocityX = function(velX){
	this.sprite.body.velocity.x = velX;
}

Player.prototype.velocityY = function(velY){
	this.sprite.body.velocity.y = velY;
	this.game.camera.y = this.sprite.position.y;

}

Player.prototype.resetVel = function(){
	this.sprite.body.velocity.setTo(0, 0);
}

Player.prototype.rtnCamera = function () {
	return this.sprite;
}

// Add animation states and transitions

// Collision detection