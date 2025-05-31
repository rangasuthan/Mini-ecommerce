const express = require('express');
const router = express.Router();
const {createOrder, getOrders } = require('../controllers/orderController');

router.route('/order').post(createOrder);
router.route('/orderDetails').get(getOrders);

module.exports = router;
