const level1 = new Level(
    [
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
        new PufferFish()

    ],
    [
        new Water(0), // backround middle
        new Fondo2(0),
        new Fondo1L(0),
        new Floor(0),
        new Water(720 * 2 - 3), // background before sharkie
        new Fondo2(720 * 2- 3),
        new Fondo1L(720 * 2- 3),
        new Floor(720 * 2- 3),
        new Water(-720 * 2 + 3), // background after sharkie
        new Fondo2(-720 * 2 + 3),
        new Fondo1L(-720 * 2 + 3),
        new Floor(-720 * 2 + 3),
        new Light(0)
    ]
);