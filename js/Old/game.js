/***
*	Beneath the surface
*	-------------------
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
		bubbles = {
			speed: -50
		},
		fixed;

	function preload() {

		game.load.atlasXML('player', 'assets/penguin-swim.png', 'assets/penguin-swim.xml');
		
		game.load.image('bubble', 'assets/bubble.png');
				

		

		/* REFERENCE EXAMPLE CODE
		// Load tile map
		game.load.tilemap('map', 'assets/cityBlockTile.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('city', 'assets/cityBlockTile.png');
		// Load filter scripts
		game.load.script('light', 'filters/SampleFilter.js');
		*/
	}

	

	function create() {
		
		// Background color
		game.stage.backgroundColor = '#324d5c';
		//game.world.setBounds(0, 0, game.world.bounds.width, 1000);
		// Create an instance of the player
		player = new Player(game);
		player.create();

		// Bubbles
		bubbles.group = game.add.group();

		for(var i = 0; i < 3; i++){
			
			bubble = bubbles.group.create(game.world.randomX, game.world.randomY + game.world.bounds.height, 'bubble');
			bubble.anchor.setTo(0.5,0.5);
			bubble.body.velocity.y = bubbles.speed;

		}

		

    	cursors = game.input.keyboard.createCursorKeys();
    	

    	console.log();
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
		
		player.resetVel();

    	if(cursors.up.isDown){
	        player.velocityY(-200);
	    } else if(cursors.down.isDown) {
	        player.velocityY(200);
	    }

	    if(cursors.left.isDown){
	        player.velocityX(-200);
	    } else if(cursors.right.isDown){
	        player.velocityX(200);
	    }
		
		game.world.forEach(function(bubble) {
			
        	if(bubble.position.y < 0){
        		bubbles.group.remove(bubble);
        		bubble = bubbles.group.create(game.world.randomX, game.world.bounds.height + 50, 'bubble');
				bubble.anchor.setTo(0.5,0.5);
				bubble.body.velocity.y = bubbles.speed;
        	}
        	
    	});
		

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





