const cart = [];
    
    function addToCart(name, price) {
      const product = { name, price };
      cart.push(product);
      updateCart();
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCart();
    }

    function updateCart() {
      const cartContainer = document.getElementById('cont1');
      cartContainer.innerHTML = '';

      let total = 0;
      cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('cnt2');
        div.className = 'cntcr';
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

      document.getElementById('total').textContent = total;
    }

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = "stand.html";
    } 
);