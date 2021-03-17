class Boss extends Opponent {
    
    constructor (game) {
        const bossSpeed = OPPONENT_SPEED * 2,
            bossImage = BOSS_PICTURE,
            bossImageDead = BOSS_PICTURE_DEAD,
            isBoss = true;
        super(game, isBoss);
        this.myImageDead = bossImageDead;
        this.myImage = bossImage;
        this.speed = bossSpeed;
    }

    collide () {
        super.collide();
        this.game.endGame();
    }
}