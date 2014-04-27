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

			this.game.load.image('healthBar', 'assets/healthBar.png');

		},

		create: function(){

			this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');

			this.player.anchor.setTo(0.5,0.5);

			this.player.animations.add('swim', Phaser.Animation.generateFrameNames('penguinswim', 0, 11, '', 4), 12, true);
			
			this.player.animations.play('swim');

			controls = this.game.input.keyboard.createCursorKeys();

			this.bubble = this.game.add.sprite(this.game.world.randomX, this.game.height - 20, 'bubble');

			this.healthBar = this.game.add.sprite(this.game.world.width, 20, 'healthBar');

			this.healthBar.anchor.setTo(0.5,0.5);

			this.healthBar.scale.x = 200;

			console.log(this.healthBar);

		},

		update: function(){

			this.player.body.velocity.setTo(0, 0);
			
    		if(controls.down.isDown){

	        	this.bubble.body.velocity.y = -400;

	    	} else if(controls.up.isDown) {

	        	this.bubble.body.velocity.y = -100;

	    	} else {

	    		this.bubble.body.velocity.y = -200;

	    	}

		    if(controls.left.isDown){

		    	this.leanAnim(20);

		        this.player.body.velocity.x = -200;

		    } else if(controls.right.isDown){

		    	this.leanAnim(-20);

		        this.player.body.velocity.x = 200;

		    } else {

		    	this.leanAnim(0);

		    }

		    this.healthBar.scale.x -= 0.5;

		    if(this.healthBar.scale.x <= 0){

		    	this.restart_game();

		    }

		    this.bubble.outOfBoundsKill = true;

		    if(this.bubble.alive == false){
		    	
		    	this.bubble = this.game.add.sprite(this.game.world.randomX - 20, this.game.height - 20, 'bubble');

		    }

		    this.game.physics.collide(this.player, this.bubble, this.collision, null, this);

		    if(this.player.inWorld == false){

		    	this.restart_game();

		    }

		},

		leanAnim: function(arg){

			var anim = this.game.add.tween(this.player);

			anim.to({ angle: arg }, 20);

			anim.start();

		},

		collision: function(){

			this.bubble.destroy();

			this.healthBar.scale.x += 50;

		},

		restart_game: function(){

			this.game.state.start('play');

		}

	}

	game.state.add('play', play_state);
	game.state.start('play');

});





