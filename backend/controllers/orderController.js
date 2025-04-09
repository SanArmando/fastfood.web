const Order = require('../models/Order');
const notify = require('../services/notifier');

exports.createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  notify(order); // notifica al celular
  res.status(201).json({ message: 'Pedido recibido' });
};

