//Login Page
const userEmailNew = 'weavernew_test@proton.me';
const userPasswordNew = '@EokP23';

const userEmail = 'weaver_test@proton.me';
const userPassword = 'P4ssw0rd123!';

//newEmailMessagePage
const recipientEmail = 'aeawe@mailsac.com';
const newEmailSubject = 'This is the subject';

//openCalendarPage
const currentDateAndTime = new Date();
const eventTitle = 'Test Automation for playwright';
const eventDesc = 'Performed on: '+currentDateAndTime;

//Negative Test : loginPage
const correctUserEmailNeg = 'negativeTest421@proton.me';
const correctUserPasswordNeg = 'P4ssw0rd123!';
const wrongUserEmail = '5123';
const wrongUserPassword = 'P4ss1232';
const messageWrongUsername = 'Incorrect login credentials. Please try again.';
const messageWrongPw = 'The password is not correct. Please try again with a different password.';

export {userEmail, userPassword, recipientEmail, newEmailSubject, eventTitle, eventDesc, correctUserEmailNeg, 
    correctUserPasswordNeg, wrongUserEmail, wrongUserPassword,messageWrongUsername, messageWrongPw};