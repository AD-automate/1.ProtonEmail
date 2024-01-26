import { userEmail, userPassword } from './Credentials/cred_proton_email';
import { recipientEmail, newEmailSubject} from './Credentials/cred_proton_email';
import { eventTitle, eventDesc } from './Credentials/cred_proton_email';
import { correctUserEmailNeg, correctUserPasswordNeg, wrongUserEmail, wrongUserPassword,messageWrongUsername, messageWrongPw} from './Credentials/cred_proton_email';

const {test, expect} = require('@playwright/test');
const landingPage = require('./Pages/landingPage');
const loginPage = require('./Pages/loginPage');
const homePage = require('./Pages/homePage');
const newEmailMessagePage = require('./Pages/newEmailMessagePage');
const openNewEmailPage = require('./Pages/openNewEmailPage');
const openCalendarPage = require('./Pages/openCalendarPage');

test.setTimeout(80000);

test('User logs in, creates new email and logs out', async ({page}) => {

     await test.step('User heads to log in page and initiate sign in', async() => {
        await landingPage.clickSignIn(page);        
     });  

     await test.step('User inputs details on sign in page', async()=>{
        await loginPage.inputDetails(page, userEmail, userPassword);
        await page.waitForTimeout(3000); //adding    
     });

     await test.step('User opens new message and copies some elements', async() => {
      await openNewEmailPage.copyElements(page);
     }); 

     await test.step('User opens new message, copy elements and creates new email message', async() => {         
         await newEmailMessagePage.createNewMessage(page, recipientEmail, newEmailSubject);         
     });

     await test.step('User opens calendar on a new tab', async() => {
         await openCalendarPage.pressAppButton(page);
         await openCalendarPage.createNewCalendarEvent(openCalendarPage.newPage, eventTitle, eventDesc);
     });

     await test.step('User (on homepage), signs out', async()=>{
        await homePage.clickSignOut(page, expect);
     });

});

test('Negative testing', async({page})=>{
    
   //run this test step in headed mode, it will fail on headless because of captcha
   await test.step('User inputs invalid email address', async() => {
      await landingPage.clickSignIn(page);
      await loginPage.inputWrongUsername(page,expect, wrongUserEmail, correctUserPasswordNeg,messageWrongUsername);      
   });

   await test.step('User inputs invalid password', async() =>{
      await landingPage.clickSignIn(page);
      await loginPage.inputWrongPassword(page,expect,correctUserEmailNeg, wrongUserPassword, messageWrongPw);
   })

});

