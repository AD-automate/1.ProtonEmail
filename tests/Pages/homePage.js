const openCalendarPage = require('./openCalendarPage')

class homePage{

    async clickSignOut(page,expect){ 
        
        //wait  for newPage to be closed before signing out on main page
        const newPage = openCalendarPage.getNewPage();
        await Promise.all([
            newPage.close()
          ]);

        await expect(page).toHaveURL(/.*inbox/);        
        await page.getByTestId('heading:userdropdown').click();
        await page.getByTestId('userdropdown:button:logout').click();
        console.log('Click sign out done');
        
    }
}

module.exports = new homePage;

//User logs out on main page