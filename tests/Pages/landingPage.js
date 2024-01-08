class landingPage{

    async clickSignIn(page){

       await page.goto('https://proton.me/mail');
        await page.getByRole('link', {name: 'Sign in'}).click();
        console.log('click sign in done');
        
    }
}

module.exports = new landingPage;

//User press sign in button