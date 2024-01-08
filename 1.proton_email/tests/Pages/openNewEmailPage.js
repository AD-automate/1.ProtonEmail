class openNewEmailPage{
   
    async copyElements(page){   //method    

        //adding innerText + split functionality
         await page.getByTestId('message-item:Get the Proton Mail mobile app').click();
         const textCopied = page.frameLocator('[title="Email content"]').locator('[class="mcnTextContentContainer"]').nth(1); 
         const userToSplit = await textCopied.innerText();  
         const splitText = userToSplit.split(' ');
         const words = splitText[2]; 
         this.words = words;                     
         
         await page.getByTestId('message-header-expanded:more-dropdown').click(); 
         await page.getByTestId('message-view-more-dropdown:view-message-details').click();
         const textSignature = page.getByTestId('recipients:to-list').locator('[data-testid="recipients:item-weaver_test@proton.me"]');
         const textSig = await textSignature.innerText();
         this.textSig = textSig; 

         await page.locator('[class="button button-solid-norm ml-auto"]').click();
         await page.getByTestId('toolbar:back-button').click();   
         console.log('Open new message done')
                  
    }
    
    //getter : to use words & textSig variable to other class
    getWords(){return this.words;}
    getTextSig(){return this.textSig;}
    
}

module.exports = new openNewEmailPage;

//User open new email and copies some elements



