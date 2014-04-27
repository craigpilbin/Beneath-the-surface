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

			this.game.load.atlasXML('player', 'assets/penguinswim.png', 'assets/penguinswim.xml');

			this.game.load.image('bubble', 'assets/bubble.png');

			this.game.load.image('healthBar', 'assets/healthBar.png');

			this.game.load.image('emit', 'assets/emit.png');

			this.game.load.image('fish1', 'assets/fish1.png');

			this.game.load.atlasXML('fish2', 'assets/fish2.png', 'assets/fish2.xml');

		},

		create: function(){

			this.player = this.game.add.sprite(this.game.world.centerX, h / 3, 'player');

			this.player.anchor.setTo(0.5,0.5);

			this.player.animations.add('swim', Phaser.Animation.generateFrameNames('penguinswim', 0, 9, '', 4), 16, true);
			
			this.player.animations.add('swimFast', Phaser.Animation.generateFrameNames('penguinswim', 0, 9, '', 4), 30, true);

			this.player.animations.add('swimSlow', Phaser.Animation.generateFrameNames('penguinswim', 0, 9, '', 4), 10, true);

			this.player.animations.play('swim');

			this.player.body.immovable = true;
	
			this.fish1 = this.game.add.sprite(20, this.game.world.randomY + this.game.height / 2, 'fish1');

			this.fish1.anchor.setTo(0.5,0.5);

			this.fish1.scale.x /= 2;

			this.fish1.scale.y /= 2;

			this.fish2 = this.game.add.sprite(this.game.width + 20, this.game.world.randomY + this.game.height / 2, 'fish2');

			this.fish2.anchor.setTo(0.5,0.5);

			this.fish2.scale.x /= 2;

			this.fish2.scale.y /= 2;

			this.fish2.animations.add('fishswim', Phaser.Animation.generateFrameNames('fish2', 0, 9, '', 4), 16, true);
			
			this.fish2.animations.play('fishswim');

			controls = this.game.input.keyboard.createCursorKeys();

			this.bubble = this.game.add.sprite(this.game.world.randomX, this.game.height - 20, 'bubble');

			this.bubble.bubbleScale = game.rnd.realInRange(0.2, 1.5);

			this.bubble.scale.x = this.bubble.bubbleScale;

			this.bubble.scale.y = this.bubble.bubbleScale;

			this.healthBar = this.game.add.sprite(this.game.world.width, 20, 'healthBar');

			this.healthBar.anchor.setTo(0.5,0.5);

			this.healthBar.scale.x = 200;

			this.emit = game.add.emitter(this.game.world.centerX, h / 3 - 37, 250);

			this.emit.makeParticles('emit', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 200, true, true);

			this.emit.minParticleSpeed.setTo(-200, -300);
		    
		    this.emit.maxParticleSpeed.setTo(100, -400);
		    
		    this.emit.angularDrag = 50;

		    this.emit.maxParticleScale = 1.3;

		    this.emit.start(false, 800, 60);

		    this.collideEmit = game.add.emitter(0,0,200);

		    this.collideEmit.makeParticles('emit');

		    this.collideEmit.gravity = -200;
		    
		},

		update: function(){

			this.player.body.velocity.setTo(0, 0);
			
			if(controls.left.isDown){

		    	this.leanAnim(20);

		    	this.emit.emitX = this.player.position.x + 10;

		        this.player.body.velocity.x = -250;

		    } else if(controls.right.isDown){

		    	this.leanAnim(-20);

		    	this.emit.emitX = this.player.position.x - 10;

		        this.player.body.velocity.x = 250;

		    } else {

		    	this.leanAnim(0);

		    	this.emit.emitX = this.player.position.x;
		    
		    	this.emit.emitY = this.player.position.y - this.player.height / 2;

		    }

    		if(controls.down.isDown){

	        	this.bubble.body.velocity.y = -400;

	        	this.fish1.body.velocity.y = -200;

	        	this.fish2.body.velocity.y = -200;

	        	this.emit.frequency = 10;

	        	this.player.animations.play('swimFast');

	        	if(controls.left.isDown){

	        		this.player.body.velocity.x = -350;

	        	} else if(controls.right.isDown){

	        		this.player.body.velocity.x = 350;

	        	}

	    	} else if(controls.up.isDown) {

	        	this.bubble.body.velocity.y = -100;

	        	this.fish1.body.velocity.y = -50;

	        	this.fish2.body.velocity.y = -50;

	        	this.emit.frequency = 150;

	        	this.player.animations.play('swimSlow');

	        	if(controls.left.isDown){

	        		this.player.body.velocity.x = -200;

	        	} else if(controls.right.isDown){

	        		this.player.body.velocity.x = 200;

	        	}

	    	} else {

	    		this.bubble.body.velocity.y = -200;

	    		this.emit.frequency = 60;

	    		this.player.animations.play('swim');

	    	}

			this.fish1.body.velocity.x = 60;

	    	this.fish1.body.velocity.y = -100;

	    	this.fish2.body.velocity.x = -90;

	    	this.fish2.body.velocity.y = -100;

	    	this.fish1.angle += game.rnd.realInRange(0, 0.5);;

			this.healthBar.scale.x -= 0.5;
			
		    if(this.healthBar.scale.x <= 0){

		    	this.restart_game();

		    }

		    if(this.fish1.outOfBoundsKill == false){
		    	
		    	this.fish1.outOfBoundsKill = true;
		    	
		    }

		    if(this.fish1.alive == false){

		    	this.fish1 = this.game.add.sprite(20, this.game.world.randomY + this.game.height / 2, 'fish1');

				this.fish1.anchor.setTo(0.5,0.5);

				this.fish1.scale.x /= 2;

				this.fish1.scale.y /= 2;

		    }
		    
		    if(this.fish2.outOfBoundsKill == false){
		    	
		    	this.fish2.outOfBoundsKill = true;
		    	
		    }

		    if(this.fish2.alive == false){

		    	this.fish2 = this.game.add.sprite(this.game.width + 20, this.game.world.randomY + this.game.height / 2, 'fish2');

				this.fish2.anchor.setTo(0.5,0.5);

				this.fish2.scale.x /= 2;

				this.fish2.scale.y /= 2;

				this.fish2.animations.add('fishswim', Phaser.Animation.generateFrameNames('fish2', 0, 9, '', 4), 16, true);
				
				this.fish2.animations.play('fishswim');

		    }

		    this.bubble.outOfBoundsKill = true;

		    if(this.bubble.alive == false){
		    	
		    	this.bubble = this.game.add.sprite(this.game.world.randomX - 20, this.game.height - 20, 'bubble');

		    	this.bubble.bubbleScale = game.rnd.realInRange(0.2, 1.5);

				this.bubble.scale.x = this.bubble.bubbleScale;

				this.bubble.scale.y = this.bubble.bubbleScale;

		    }

		    this.game.physics.collide(this.player, this.bubble, this.collision, null, this);

		    this.game.physics.collide(this.player, this.fish1, this.kill, null, this);

		    this.game.physics.collide(this.player, this.fish2, this.kill, null, this);

		    if(this.player.inWorld == false){

		    	this.restart_game();

		    }

		},

		leanAnim: function(arg){

			var anim = this.game.add.tween(this.player);

			anim.to({ angle: arg }, 20);

			anim.start();

		},

		collision: function(pl, ox){

			this.healthBar.scale.x += (50 * ox.bubbleScale);
			
			this.collideEmit.x = ox.position.x;

			this.collideEmit.y = ox.position.y;

			ox.destroy();

			this.collideEmit.start(true, 2000, null, 10);

		},

		kill: function(){

			this.restart_game();

		},

		restart_game: function(){

			this.game.state.start('play');

		}

	}

	game.state.add('play', play_state);
	game.state.start('play');

});





