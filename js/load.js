var load_state = {
	preload: function(){
		this.game.stage.backgroundColor = '#324d5c';
		this.game.load.atlasXML('player', 'assets/penguin-swim.png', 'assets/penguin-swim.xml');
		this.game.load.image('bubble', 'assets/bubble.png');
		this.game.load.image('pipe', 'assets/bubble.png');
		this.game.load.image('bird', 'assets/bubble.png');
		this.game.load.image('jump', 'assets/bubble.png');
	},
	create: function(){
		this.game.state.start('menu');
	}
}