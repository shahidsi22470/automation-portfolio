// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './Sigdev_Tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,
  reporter: 'html',
  use: {
    baseURL: 'https://sigdev-dev.thetie.io',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testDir: './tests',
      testMatch: 'login.setup.js',
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: 'auth.json' },
      dependencies: ['setup'],
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], storageState: 'auth.json' },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], storageState: 'auth.json' },
      dependencies: ['setup'],
    },
  ],
});
