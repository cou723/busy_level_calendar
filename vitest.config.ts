/// <reference types="vitest" />

import { configDefaults, defineConfig, mergeConfig, type UserConfig } from "vitest/config";
import path from "path";

const config = defineConfig({
  test: {
    ...configDefaults,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}) as UserConfig;

export default config;
