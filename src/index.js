// import numeral from 'numeral';

// const price = numeral(100).format('$0,0.00');

// console.log(`I have to give ${price} to someone`); // eslint-disable-line no-console

import {getUsers, deleteUser} from './api/userApi';

let userBody = "";

getUsers().then(results => {
    results.forEach(user => {
        userBody+= `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById('users').innerHTML = userBody;

    //get reference to all delete links
    const deleteLinks = global.document.querySelectorAll('.deleteUser');
    Array.from(deleteLinks).forEach((link) => {
        link.addEventListener('click', (event) => {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id"].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        })
    })
})