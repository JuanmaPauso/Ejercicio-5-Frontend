class Boss extends Opponent {
    
    constructor (game) {
        super(game);
        
        this.myImage = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
        this.speed = OPPONENT_SPEED * 2;
        this.image.src = this.myImage;
        
    }

    collide () {
        super.collide();
        this.game.endGame();
    }
}



