const CreditCard = require('credit-card')
let card = {
    cardType: 'VISA',
    number: '4111111111111111',
    expiryMonth: '03',
    expiryYear: '2100',
    cvv: '123'
}
let validation = CreditCard.validate(card)
console.log(validation)