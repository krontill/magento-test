import Dialog from 'a11y-dialog-component';

const dialog = new Dialog('.js-dialog', {
    openingSelector: '.js-dialog-open',
    closingSelector: '.js-dialog-close',
    labelledby: 'dialog-title',
});
