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

	var game = new Phaser.Game(playWidth, h, Phaser.AUTO, '', { preload: preload, create: create, update: update }),
		player = {},
		controls = {},
		bubble,
		bubble2,
		bubbles = [],
		bg;

	function preload() {

		game.load.image('bg', 'assets/bg.png');
		
		game.load.atlasXML('player', 'assets/penguin-swim.png', 'assets/penguin-swim.xml');
		
		game.load.image('bubble', 'assets/bubble.png');
		//game.load.atlas('player', 'assets/penguin-swim.png', 'assets/penguin-swim.json');
		//game.load.image('player', 'assets/penguin-swim.png');
		

		

		/* REFERENCE EXAMPLE CODE
		// Load tile map
		game.load.tilemap('map', 'assets/cityBlockTile.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('city', 'assets/cityBlockTile.png');
		// Load filter scripts
		game.load.script('light', 'filters/SampleFilter.js');
		*/
	}

	

	function create() {
		
		// Add the background to the stage
		bg = game.add.sprite(game.world.centerX, game.world.centerY, 'bg');
		bg.anchor.setTo(0.5, 0.5);

		// Create an instance of the player
		player = new Player(game);
		player.create();

		// Bubbles
		//bubble = game.add.sprite(game.world.randomX, game.world.centerY, 'bubble');
		//bubble2 = game.add.sprite(game.world.randomX, game.world.centerY + 100, 'bubble');
		//bubble.anchor.setTo(0.5,0.5);
		//bubble2.anchor.setTo(0.5,0.5);
		
		//bubbles = game.add.group();

		for(var i = 0; i < 3; i++){
			bubbles[i] = game.add.sprite(game.world.randomX, game.world.randomY, 'bubble');
			bubbles[i].body.velocity.y = -50;
		}

		

		console.log(bubbles);
		// Setup controls
		controls.down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		controls.up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		controls.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		controls.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);



		/* REFERENCE EXAMPLE CODE
		// Add Tile map
		map = game.add.tilemap('map');
		map.addTilesetImage('city');
		map.setCollisionBetween(1, 12);
		layer = map.createLayer('Tile Layer 1');
		
		// Add filters
		lightFilter = game.add.filter('SampleFilter');
		light.filters = [lightFilter];
		*/
	}

	function update() {
		
		if(controls.down.isDown){
			console.log("Down");
		} else if(controls.up.isDown){
			console.log("up");
		}
		
		if(controls.left.isDown){
			console.log("Left");
		} else if(controls.right.isDown){
			console.log("right");
		}
		

		

		/* REFERENCE EXAMPLE CODE
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





