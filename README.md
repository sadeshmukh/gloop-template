# Gloop Template

![logo](https://cdn.halceon.dev/img/gloop4.png)

This is a template for Gloop (follow along [here](https://gloop.halceon.dev/guides)). To get started, clone this repo:

```bash
git clone https://github.com/sadeshmukh/gloop-template.git
```

Then, install dependencies and start the development server:

```bash
cd gloop-template
bun i
bun dev
```

You should only need to update `main.ts` while building your game. Drop any additional assets you'd like to use into `public/assets` and don't forget to load them with `k.loadSprite`. If you'd like to use any [Kaplay crew](https://kaplayjs.com/crew/) assets, you can import them like this:

```ts
k.loadCrew("sprite", "marks_legend"); // sprites have an outline version, which you can load by appending a "-o" to the end of the name
```

Then, you can use them like you'd use any other sprite with `k.sprite`.
