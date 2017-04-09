// import numeral from 'numeral';

// const price = numeral(100).format('$0,0.00');

// console.log(`I have to give ${price} to someone`); // eslint-disable-line no-console

import {getUsers} from './api/userApi';

let userBody = "";

getUsers().then(results => {
    results.forEach(user => {
        userBody+= `<tr>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById('users').innerHTML = userBody;
})