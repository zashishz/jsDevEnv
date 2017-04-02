import numeral from 'numeral';

const price = numeral(100).format('$0,0.00');

console.log(`I have to give ${price} to someone`); // eslint-disable-line no-console