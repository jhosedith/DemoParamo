Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('ResizeObserver')) {
        // returning false here prevents Cypress from
        // failing the test
        return false;
    }
    return true;
});