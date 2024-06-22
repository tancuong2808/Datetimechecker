// currentDateTimeChecker.spec.js
import dayjs from 'dayjs';

describe('Current Date and Time Checker', () => {
  it('checks the current date and time on the website', () => {
    cy.visit('https://www.timeanddate.com/');

    const currentDate = dayjs().format('MMMM D, YYYY');
    const currentTime = dayjs().format('h:mm:ss A');

  
    cy.get('#currentDateText').should('have.text', currentDate);
    cy.get('#currentTimeText').should('have.text', currentTime);
  });
});

