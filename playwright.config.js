// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './Sigdev_Tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'html',
  expect: {
    timeout: 15000,
  },
  use: {
    baseURL: 'https://sigdev-dev.thetie.io',
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 15000,
    navigationTimeout: 30000,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    trace: 'on-first-retry',
    launchOptions: {
      args: [
        '--disable-blink-features=AutomationControlled',
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
    },
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
      use: {
        ...devices['Desktop Firefox'],
        storageState: 'auth.json',
        userAgent: 'Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0',
        launchOptions: {
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
          firefoxUserPrefs: {
            'dom.webdriver.enabled': false,
            'useAutomationExtension': false,
          },
        },
      },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        storageState: 'auth.json',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15',
      },
      dependencies: ['setup'],
    },
  ],
});
