const express = require('express');
const router = express.Router();
const customerService = require('../services/customer.service');

// routes
router.post('/create', create);
router.post('/reset', reset);
router.get('/', getAll);
router.get('/:id/detail', getById);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    customerService.create(req.body);
    res.sendStatus(204);
}

function getAll(req, res, next) {
    res.json(customerService.getAll());
}

function getById(req, res, next) {
    const customer = customerService.getById(req.params.id);

    if (customer) {
        res.json(customer);
    } else {
        res.sendStatus(404);
    }
}

function _delete(req, res, next) {
    if (customerService.delete(req.params.id)) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}

function reset(req, res, next) {
    customerService.reset();
    res.sendStatus(204);
}