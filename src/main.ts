import kaplay from "kaplay";
import { crew } from "@kaplayjs/crew";

const k = kaplay({ plugins: [crew] });

// k.setGravity(1800); // uncomment to enable gravity

k.loadRoot("./");
k.loadSprite("player", "assets/player.png");
k.loadSprite("spikes", "assets/spikes.png");
k.loadCrew("sprite", "marks_legend");

k.scene("game", () => {
  const player = k.add([
    k.sprite("player"),
    k.pos(80, 80),
    k.scale(4),
    k.area(), // collision
    k.body(), // gravity-affected
  ]);
});

k.go("game");
