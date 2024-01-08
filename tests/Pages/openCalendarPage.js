class openCalendarPage{  

    async pressAppButton(page){           
        
        await page.locator('[class="apps-dropdown-button shrink-0"]').click();
        await page.getByRole('link', { name: 'Proton Calendar' }).click()

            // Opening new tab for calendar  
            const [newPage] = await Promise.all([
              page.waitForEvent('popup')             
            ]);
            this.newPage = newPage; //storing newPage value     
            console.log('Open calendar on new tab done');        
    }

    async createNewCalendarEvent(newPage, eventTitle, eventDesc){

        await newPage.waitForTimeout(3000);
        await newPage.getByTestId('calendar-view:new-event-button').click();
        await newPage.locator('[id="event-title-input"]').fill(eventTitle);        
        await newPage.locator('[class="max-h-custom w-full textarea"]').fill(eventDesc);
        await newPage.getByTestId('create-event-modal:save').click();
        await newPage.close(); 
        console.log('Calendar event created and new tab is closed');
    }

    getNewPage(){return this.newPage;}

}

module.exports = new openCalendarPage;

//User open calendar page on new tab and creates a new calendar new event