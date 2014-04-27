/* Caves & Shipwrecks 
*
*
*/

function Terrain(game){
	this.game = game;
	this.sprite = 'null';
	this.x = game.world.centerX;
	this.y = game.world.bounds.height / 3;

}

Terrain.prototype.create = function(){

	// Add the player to the stage
	//this.sprite = this.game.add.sprite(this.x, this.y, '');

	// Set the centre point of the sprite
	//this.sprite.anchor.setTo(0.5, 0.5);

	// Build a group of objects

	// Random placement

	
}

Terrain.prototype.update = function(){

}

// Check for collisions

// Animations