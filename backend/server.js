const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/api/orders', orderRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => console.log("🟢 Servidor corriendo en http://localhost:3000"));
  });
