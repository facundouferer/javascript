
const products = [
  { id: 1, nombre: 'Producto 1', precio: 1500 },
  { id: 2, nombre: 'Producto 2', precio: 2500 },
  { id: 3, nombre: 'Producto 3', precio: 3500 }
]

function renderProducts(products) {
  const body = document.querySelector('body');
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.innerHTML = `
            <h2>${product.nombre}</h2>
            <p>Precio: $${product.precio}</p>
        `;
    body.appendChild(productElement);
  });
}

renderProducts(products);