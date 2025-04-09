const axios = require('axios');

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

module.exports = async function notify(order) {
  const message = `
🛒 *Nuevo Pedido*:
📛 Cliente: ${order.name}
📍 Dirección: ${order.address}
📦 Pedido: ${order.items.map(i => i.name + ' x' + i.qty).join(', ')}
💰 Total: $${order.total}
  `;
  await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "Markdown"
  });
};
