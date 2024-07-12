window.onload = function() {
    fetchProducts();

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        fetchProducts();
    });
};

function fetchProducts() {
    const category = document.querySelector('[name="category"]').value;
    const subcategory = document.querySelector('[name="subcategory"]').value;
    const price = document.querySelector('[name="price"]').value;
    const tags = document.querySelector('[name="tags"]').value;

    let url = `http://localhost:3000/products?${new URLSearchParams({category, subcategory, price, tags}).toString()}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayProducts(data))
        .catch(error => console.error('Error:', error));
}

function displayProducts(products) {
    const container = document.querySelector('.product-grid');
    container.innerHTML = ''; // Clear existing products
    products.forEach(product => {
        container.innerHTML += `
            <div class="card product-card">
                <img src="${product.ProductLink}" class="card-img-top" alt="${product.ProductName}">
                <div class="card-body">
                    <h5 class="card-title">${product.ProductName}</h5>
                    <p class="card-text">${product.Description}</p>
                    <p class="card-text"><strong>LKR ${product.Price}</strong></p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        `;
    });
}
