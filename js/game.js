/***
*	Beneath the surface
*	-------------------
*
*	Authors: Team Niftit!
*
***/

$(document).ready(function(){

	var w = $(window).width(),
		h = $(window).height(),
		playWidth = (h / 3) * 2;

	var game = new Phaser.Game(playWidth, h, Phaser.AUTO, '', { preload: preload, create: create, update: update });

	function preload() {




		/* REFERENCE EXAMPLE CODE
		// Load tile map
		game.load.tilemap('map', 'assets/cityBlockTile.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('city', 'assets/cityBlockTile.png');
		// Load sprites
		game.load.image('dude', 'assets/dude.png');
		game.load.image('light', 'assets/light.png');
		// Load filter scripts
		game.load.script('light', 'filters/SampleFilter.js');
		*/	
	}

	// Add game vars here
	var player;

	function create() {
		



		/* REFERENCE EXAMPLE CODE
		// Add Tile map
		map = game.add.tilemap('map');
		map.addTilesetImage('city');
		map.setCollisionBetween(1, 12);
		layer = map.createLayer('Tile Layer 1');
		
		// Add sprite to screen
		dude = game.add.sprite(game.world.centerX, game.world.centerY, 'dude');
		dude.anchor.setTo(0.5, 0.5);

		// Add Key listeners
		go = game.input.keyboard.addKey(Phaser.Keyboard.W);
		
		// Add filters
		lightFilter = game.add.filter('SampleFilter');
		light.filters = [lightFilter];
		*/
	}

	function update() {


		

		/* REFERENCE EXAMPLE CODE
		// Rotate sprite to mouse pointer
		dude.rotation = game.physics.angleToPointer(dude);
		
		// Listen for input
		if(go.isDown){
			game.physics.moveToPointer(dude, 400);
			if(Phaser.Rectangle.contains(dude.body, game.input.x, game.input.y)){
				dude.body.velocity.setTo(0,0);
			}
		} else {
			dude.body.velocity.setTo(0,0);
		}
		*/
	}

});





