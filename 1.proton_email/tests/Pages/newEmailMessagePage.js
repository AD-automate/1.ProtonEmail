const openNewEmailPage = require('./openNewEmailPage');

class newEmailMessagePage{

    async createNewMessage(page, recipientEmail, newEmailSubject){
                
        const words = openNewEmailPage.getWords();
        const textSig = openNewEmailPage.getTextSig();

        await page.getByTestId('sidebar:compose').click();        
        await page.getByTestId('composer:to').fill(recipientEmail);
        await page.getByTestId('composer:subject').fill(newEmailSubject);
        await page.frameLocator('[title="Email composer"]').locator('#rooster-editor div').first().click();
        await page.frameLocator('[title="Email composer"]').locator('#rooster-editor').fill('Welcome to '+words+'.\n\nSincerely,\n'+textSig);       
        await page.getByTestId('composer:send-button').click();
        console.log('Create new message done');

    }

}

module.exports = new newEmailMessagePage;

//User creates new message and paste the copied details