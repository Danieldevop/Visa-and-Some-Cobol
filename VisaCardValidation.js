let visaCard = require('visa-validation')
let card = {
    number: '4912685128617781',
    expiryMonth: '08',
    expiryYear: '2024',
    cvv: ''
} 

var validation = visaCard.validateVisa(card)

console.log(validation)

/*
Methods
You can also use those methods, to get each 
information of the visa card separately: hasVisaPatterns(), isValidCvv(),
 isExpired(), isValidExpiryYear(), isValidExpiryMonth(), 
 isValidCardNumber(), luhn()
*/