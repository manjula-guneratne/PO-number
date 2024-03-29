const {User} = require('../models');

const userData = [
    {
        emp_number: "GUN01",
        title: "Main. Assistant",
        first_name: "Manjula",
        last_name: "Guneratne",
        password: "testing",
    },
    {
        emp_number: "VIC01",
        title: "Technition",
        first_name: "Vic",
        last_name: "Vicky",
        password: "testing",
    },
    {
        emp_number: "EDW01",
        title: "Technition",
        first_name: "Edward",
        last_name: "Ed",
        password: "testing",
    },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;