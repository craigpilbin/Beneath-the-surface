/***
*	Beneath the surface
*	-------------------
*
***/

$(document).ready(function(){

	var h = $(window).height(),
		playWidth = (h / 3) * 2;

	var game = new Phaser.Game(playWidth, h, Phaser.AUTO, '');

	/*
	game.state.add('load', load_state);  
	game.state.add('menu', menu_state);  
	game.state.add('play', play_state);  
	game.state.start('load');
	*/

	var play_state = {

		preload: function(){

			this.game.stage.backgroundColor = '#324d5c';

			this.game.load.atlasXML('player', 'assets/penguin-swim.png', 'assets/penguin-swim.xml');

			this.game.load.image('bubble', 'assets/bubble.png');

		},

		create: function(){

			this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');

			this.player.anchor.setTo(0.5,0.5);

			this.player.animations.add('swim', Phaser.Animation.generateFrameNames('penguinswim', 0, 11, '', 4), 12, true);
			
			this.player.animations.play('swim');

			controls = this.game.input.keyboard.createCursorKeys();

			this.bubble = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'bubble');

		},

		update: function(){

			this.player.body.velocity.setTo(0, 0);
			
    		if(controls.up.isDown){

	        	this.bubble.body.velocity.y = -200;

	    	} else if(controls.down.isDown) {

	        	//this.player.body.velocity.y = 200;
	    	}

		    if(controls.left.isDown){

		        this.player.body.velocity.x = -200;

		    } else if(controls.right.isDown){

		        this.player.body.velocity.x = 200;

		    }

		    if(this.player.inWorld == false){

		    	this.restart_game();

		    }

		},

		restart_game: function(){

			this.game.state.start('play');

		}

	}

	game.state.add('play', play_state);
	game.state.start('play');

});





