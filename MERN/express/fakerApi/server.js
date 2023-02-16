const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { faker } = require('@faker-js/faker')

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    console.log(newFake);
    return newFake;
}
const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    console.log(newFake);
    return newFake;
}

app.get('/api/users/new', (req,res)=>{
    res.json(createUser());
});

app.get('/api/companies/new', (req,res)=>{
    res.json(createCompany());
});

app.get('/api/user/company', (req,res) => {
    res.json([createUser(),createCompany()])
});

app.listen(port, () => console.log(`Server is locked and loaded on port ${port}!`));