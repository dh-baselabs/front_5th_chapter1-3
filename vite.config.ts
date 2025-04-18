import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";

const isCI = process.env.CI === "true";

export default mergeConfig(
  defineConfig({
    base: isCI ? "" : "/front_5th_chapter1-3/",
    plugins: [react()],
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      coverage: {
        reportsDirectory: "./.coverage",
        reporter: ["lcov", "json", "json-summary"],
      },
    },
  }),
);
