class Level {
    enemies;
    backgrounds;
    staticObjects;

    constructor(enemies, backgrounds, staticObjects) {
        this.enemies = enemies;
        this.backgrounds = backgrounds;
        this.staticObjects = staticObjects;
    }

    createEndBoss() {
        setTimeout(() => {
            let endBoss = new EndBoss;
            world.level.push(endBoss);
        }, 3000);
    }
}