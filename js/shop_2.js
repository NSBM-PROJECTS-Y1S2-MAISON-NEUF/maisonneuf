document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.filter-section form');
    const productGrid = document.querySelector('.product-grid');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const params = new URLSearchParams(formData).toString();

        fetch(`php/filter_products.php?${params}`)
            .then(response => response.json())
            .then(data => {
                productGrid.innerHTML = '';
                if (data.length > 0) {
                    data.forEach(product => {
                        const productCard = `
                            <div class="col-md-4">
                                <div class="product-card">
                                    <img src="${product.ProductLink}" class="card-img-top" alt="${product.ProductName}">
                                    <div class="card-body">
                                        <h5 class="card-title">${product.ProductName}</h5>
                                        <p class="card-text">${product.Tags}</p>
                                        <p class="card-text"><strong>Price:</strong> $${product.Price}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                        productGrid.insertAdjacentHTML('beforeend', productCard);
                    });
                } else {
                    productGrid.innerHTML = '<p>No products found.</p>';
                }
            })
            .catch(error => console.error('Error:', error));
    });
});
