const filterBtn = document.querySelectorAll('.btn');

class Product {
  constructor(title, image) {
    this.title = title;
    this.imageUrl = image;
  }
}

class ProductItem {
  
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement('div');
    prodEl.className = `filter-thumbnail ${this.product.title} col-lg-4 col-md-4 col-sm-4 col-xs-6`;
    prodEl.innerHTML = `
      <img src="${this.product.imageUrl}" alt="${this.product.title}" class="filter-thumbnail-img">
    `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'fruit',
      'https://images.unsplash.com/photo-1523472721958-978152f4d69b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    ),
    new Product(
      'vegetable',
      'https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    ),
    new Product(
      'fruit',
      'https://images.unsplash.com/photo-1425934398893-310a009a77f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    ),
    new Product(
      'fruit',
      'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    ),
    new Product(
      'sweets',
      'https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80'
    ),
    new Product(
      'vegetable',
      'https://images.unsplash.com/photo-1538159021332-8f28e9eca2fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'
    ),
    new Product(
      'sweets',
      'https://images.unsplash.com/photo-1506224477000-07aa8a76be20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    ),
    new Product(
      'vegetable',
      'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
    ),
    new Product(
      'sweets',
      'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    )
  ];

  render() {
    const imageGallery = document.getElementById('image-gallery');
    const prodList = document.createElement('div');
    prodList.className = 'row justify-content-center';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    imageGallery.append(prodList);
  }
}

const productList = new ProductList();
productList.render();

filterBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    let btnSelected = e.target;
    toggleActiveClass(btnSelected);

    const filterThumbnails = document.querySelectorAll('.filter-thumbnail');
    if (btnSelected.classList.contains('fruits')) {
      filterThumbnails.forEach(filterThumbnail => {
        if (filterThumbnail.classList.contains('vegetable') || filterThumbnail.classList.contains('sweets')) {
          filterThumbnail.style.display = 'none';
        } else {
          filterThumbnail.style.display = 'block';
        }
      });
    } else if (btnSelected.classList.contains('vegetable')) {
      filterThumbnails.forEach(filterThumbnail => {
        if (filterThumbnail.classList.contains('fruit') || filterThumbnail.classList.contains('sweets')) {
          filterThumbnail.style.display = 'none';
        } else {
          filterThumbnail.style.display = 'block';
        }
      });
    } else if (btnSelected.classList.contains('sweets')) {
      filterThumbnails.forEach(filterThumbnail => {
        if (filterThumbnail.classList.contains('fruit') || filterThumbnail.classList.contains('vegetable')) {
          filterThumbnail.style.display = 'none';
        } else {
          filterThumbnail.style.display = 'block';
        }
      });
    } else {
      filterThumbnails.forEach(filterThumbnail => {
        filterThumbnail.style.display = 'block';
      });
    } 
  });
});

function toggleActiveClass(active) {
  filterBtn.forEach(btn => {
    btn.classList.remove('active');
  });
  active.classList.add('active');
}