import {test, expect} from '@playwright/test'

import LoginPage from '../pages/loginPage.js'
import users from '../testdata/users.json' assert {type: 'json'};

test('User can login successfully', async ({page})) => {}