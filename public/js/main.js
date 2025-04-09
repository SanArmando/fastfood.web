let cart = [];

function addToCart(name, price) {
  cart.push({ name, price, qty: 1 });
  alert(`${name} agregado al carrito`);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = form.name.value;
      const address = form.address.value;

      const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, address, items: cart, total })
      });

      const data = await response.json();
      alert(data.message);
      cart = [];
      form.reset();
    });
  }
});
