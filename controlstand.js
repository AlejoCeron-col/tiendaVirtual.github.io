function addtocart(name, price) {
    let cart = JSON.parse(localStorage.getItem('carrito')) || [];
    cart.push({ name, price });
    localStorage.setItem('carrito', JSON.stringify(cart));
    alert(`${name} agregado al carrito`);
  }