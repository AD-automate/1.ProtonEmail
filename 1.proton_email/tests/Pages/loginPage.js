class loginPage{

    async inputDetails(page, userEmail, userPassword){

        await page.locator('id=username').fill(userEmail);
        await page.locator('id=password').fill(userPassword);
        await page.getByRole('button', { name : 'Reveal Password'}).click();
        await page.locator('id=staySignedIn').click();       
        await page.getByRole('button', {name : 'Sign in'}).click();        
        console.log('input Details done');

    }

    async inputWrongUsername(page, expect, wrongUserEmail, correctUserPasswordNeg, messageWrongUsername){

        await page.locator('id=username').fill(wrongUserEmail);
        await page.locator('id=password').fill(correctUserPasswordNeg);
        await page.getByRole('button', {name : 'Sign in'}).click(); 
        await page.waitForTimeout(8000); // dont comment out when running in headed mode       
        const element = await page.locator('[class="notification__content"]');
        await expect(element).toBeVisible(true); 
        await expect(page.locator('[class="notification__content"]')).toHaveText(messageWrongUsername);      
        console.log('Error toast message is seen for incorrect username');        

    }

    async inputWrongPassword(page, expect, correctUserEmailNeg, wrongUserPassword, messageWrongPw){

        await page.locator('id=username').fill(correctUserEmailNeg);
        await page.locator('id=password').fill(wrongUserPassword);
        await page.getByRole('button', {name : 'Sign in'}).click();
        await expect(page.locator('[class="notification__content"]')).toBeVisible(true); 
        await expect(page.locator('[class="notification__content"]')).toHaveText(messageWrongPw);   
        console.log('Error toast message is seen for incorrect password');

    }

}

module.exports = new loginPage;

/*
inputDetails : User enter credentials and then signs in

inputWrongDetails: If it is failing on headless, check on headed since there are times that it prompts for captcha 
                   before processing the request.

inputWrongPassword : User enter incorrect password.                  
*/