// Get the form elements
const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('#search');
const filterSelect = document.querySelector('#filter');

// Get the product list
const productList = document.querySelector('.products');

// Add event listener to the form submission
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the search query and filter value
  const query = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;

  // Filter the products based on search query and price filter
  const filteredProducts = Array.from(productList.querySelectorAll('li')).filter(function(product) {
    const productName = product.querySelector('h3').textContent.toLowerCase();
    const productPrice = parseFloat(product.querySelector('span').textContent);

    // Filter by text search
    const matchesQuery = productName.includes(query);
    
    // Filter by price
    let matchesFilter = true;
    if (filterValue === '50') {
      matchesFilter = productPrice <= 50;
    } else if (filterValue === '100') {
      matchesFilter = productPrice > 50 && productPrice <= 100;
    } else if (filterValue === '101') {
      matchesFilter = productPrice > 100;
    }

    return matchesQuery && matchesFilter;
  });

  // Show or hide the filtered products
  Array.from(productList.querySelectorAll('li')).forEach(function(product) {
    product.style.display = 'none';
  });
  filteredProducts.forEach(function(product) {
    product.style.display = 'block';
  });
});

// Add event listener to the search input for real-time filtering
searchInput.addEventListener('input', function(event) {
    // Get the search query and filter value
    const query = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;
  
    // Filter the products based on search query and price filter
    const filteredProducts = Array.from(productList.querySelectorAll('li')).filter(function(product) {
      const productName = product.querySelector('h3').textContent.toLowerCase();
      const productPrice = parseFloat(product.querySelector('span').textContent);
  
      // Filter by text search
      const matchesQuery = productName.includes(query);
  
      // Filter by price
      let matchesFilter = true;
      if (filterValue === '50') {
        matchesFilter = productPrice <= 50;
      } else if (filterValue === '100') {
        matchesFilter = productPrice > 50 && productPrice <= 100;
      } else if (filterValue === 'more-than-100') {
        matchesFilter = productPrice > 100;
      }
  
      return matchesQuery && matchesFilter;
    });
  
    // Show or hide the filtered products
    Array.from(productList.querySelectorAll('li')).forEach(function(product) {
      product.style.display = 'none';
    });
    filteredProducts.forEach(function(product) {
      product.style.display = 'block';
    });
  });