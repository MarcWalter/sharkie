let level1;

function initLevel1() {
    level1 = new Level(
        [
            new EndBoss(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new JellyFishRegular(),
            new JellyFishRegular(),
            new JellyFishRegular(),
            new JellyFishRegular(),
            new JellyFishRegular(),
            new JellyFishRegular(),
            new JellyFishRegular(),
            new JellyFishRegular(),
            new JellyFishRegular(),
            new JellyFishRegular(),
            new JellyFishDangerous(),
            new JellyFishDangerous(),
            new JellyFishDangerous(),
            new JellyFishDangerous(),
            new JellyFishDangerous(),
            new JellyFishDangerous(),
            new JellyFishDangerous(),
            new JellyFishDangerous(),
            new JellyFishDangerous()
        ],
        [
            new Water(0), // backround middle
            new Fondo2(0),
            new Fondo1L(0),
            new Floor(0),
            new Water(720 * 2 - 3), // background before sharkie
            new Fondo2(720 * 2 - 3),
            new Fondo1L(720 * 2 - 3),
            new Floor(720 * 2 - 3),
            new Water(-720 * 2 + 3), // background after sharkie
            new Fondo2(-720 * 2 + 3),
            new Fondo1L(-720 * 2 + 3),
            new Floor(-720 * 2 + 3),
            new Light(0)
        ],
        [
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier(),
            new Barrier()
        ]
    );
}


