import { defineConfig } from "vite";

const startCongrats = () => {
  return {
    name: "vite-plugin-kaplay-hello",
    buildEnd() {
      const line = "---------------------------------------------------------";
      const msg = `Let's build a game! Follow along at [docs URL tbd].`;

      process.stdout.write(`\n${line}\n${msg}\n${line}\n`);
    },
  };
};

export default defineConfig({
  // index.html out file will start with a relative path for script
  base: "./",
  server: {
    port: 3001,
    host: true,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          kaplay: ["kaplay"],
        },
      },
    },
  },
  plugins: [startCongrats()],
});
