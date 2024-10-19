function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // 50% de posibilidades de que sea true
      if (success) {
        const products = [
          { id: 1, nombre: 'Producto 1', precio: 1500 },
          { id: 2, nombre: 'Producto 2', precio: 2500 },
          { id: 3, nombre: 'Producto 3', precio: 3500 }
        ];
        resolve(products);
      } else {
        reject('Failed to fetch products');
      }
    }, 3000);
  });
}

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

function showLoading() {
  const body = document.querySelector('body');
  const loadingElement = document.createElement('div');
  loadingElement.id = 'loading';
  loadingElement.innerText = 'Cargando...';
  body.appendChild(loadingElement);
}

function hideLoading() {
  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    loadingElement.remove();
  }
}

showLoading();

fetchProducts()
  .then(products => {
    hideLoading();
    renderProducts(products);
  })
  .catch(error => {
    hideLoading();
    console.error('Error fetching products:', error);
  })
  .finally(() => {
    console.log('Fetch products operation completed.');
  });