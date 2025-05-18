function loadCart() {
    const cart = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartContainer = document.getElementById('cont1');
    cartContainer.innerHTML = '';
  
    let subtotal = 0;
    let iva = 0;
    let total = 0;
  
    cart.forEach((item, index) => {
      subtotal += item.price;
      iva = subtotal * 0.19;
      total = subtotal + iva;
  
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="cntcr ">
            <img class = "box2" src="box.jpg" alt="producto">
            <div class="txtcr">
              <p class="txt1">
              ${item.name}
              </p>
              <p class="txt1">
                $${item.price}
              </p>
            </div>
            <button class="delete" onclick="removeFromCart(${index})"><img class="deleteimg" src="iconx.png" alt="eliminar"></button>
          </div>`;
      cartContainer.appendChild(div);
    });
  
    document.getElementById('subtotal').textContent = subtotal;
    document.getElementById('iva').textContent = iva;
    document.getElementById('total').textContent = total;
  }
  
  function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('carrito')) || [];
    cart.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(cart));
    loadCart();
  }
  
   
  // Cargar al abrir la página
  document.addEventListener('DOMContentLoaded', loadCart);
  