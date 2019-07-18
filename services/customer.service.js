const uuid = require('uuid/v4');

const sampleData = [
  {
    "name": "Lenart Fläskkarré",
    "email": "lenart.fläskkarre@example.com",
    "phone": "08-12345",
    "id": "ba2a1eea-291e-4456-83ee-b266d60815b4"
  },
  {
    "name": "Anna Stekpanna",
    "email": "anna.stekpanna@example.com",
    "phone": "018-123456",
    "id": "6548182e-01fb-4c47-88ca-7c4581541a8e"
  },
  {
    "name": "Ylva Tomatsås",
    "email": "ylva.tomatsas@example.com",
    "phone": "0276-43657",
    "id": "6f44ec32-0aa1-4bc8-88a1-44ff723b1b15"
  },
  {
    "name": "Petra Spagetti",
    "email": "petra.spagetti@example.com",
    "phone": "08-34568",
    "id": "84e5eacb-3783-4b14-a2a3-46a1a824ab42"
  }
];

let customers = Object.assign([], sampleData); // copy the sample array into customers array;

module.exports = {
  getAll,
  getById,
  create,
  reset,
  delete: _delete
};

function getAll() {
  return customers;
}

function getById(id) {
  return customers.find((customer) => customer.id === id);
}

function create(customerParams) {
  customerParams.id = uuid();
  customers.push(customerParams);
}

function _delete(id) {
  const index = customers.findIndex(customer => customer.id === id);

  if (index !== -1) {
    customers.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

function reset() {
  customers = Object.assign([], sampleData);
}