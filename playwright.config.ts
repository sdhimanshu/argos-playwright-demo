import type { PlaywrightTestConfig } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  reporter: [
    // Use "dot" reporter on CI, "list" otherwise (Playwright default).
    process.env.CI ? ["dot"] : ["list"],
    // Add Argos reporter.
    [
      "@argos-ci/playwright/reporter",
      {
        // Enable upload to Argos only when it runs on CI.
        uploadToArgos: true,
        // Set your Argos token (required only if you don't use GitHub Actions).
        token: "1d2f26f350be034842be31a9f85cb04ec1259a7d",
      },
    ],
  ],

  // Setup recording option to enable test debugging features.
  use: {
    // Setting to capture screenshot only when a test fails.
    screenshot: "only-on-failure",
    // Setting to retain traces only when a test fails.
    trace: "retain-on-failure",
  },
};

export default config;
