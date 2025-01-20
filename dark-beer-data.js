// Sample dark beers array (you can replace this with your actual data)
const darkbeers =  [
  {
      name: 'Bourbon Barrel Aged White Stout 2024',
      untappdUrl: 'https://untappd.com/b/hawkers-beer-bourbon-barrel-aged-white-stout-2024/5873622',
      rating: 3.82,
      ratingCount: 228,
      imageUrl: 'assets/images/bba.svg',
      price: 10.99,
      bulkPrice: 9.99
  },
  {
      name: 'Witching Hour',
      untappdUrl: 'https://untappd.com/b/hawkers-beer-witching-hour/5874361',
      rating: 4.04,
      ratingCount: 167,
      imageUrl: 'assets/images/Witching Hour.svg',
      price: 12.99,
      bulkPrice: 10.99
  },
  {
      name: 'Lark Barrel Aged',
      untappdUrl: 'https://untappd.com/b/hawkers-beer-witching-hour/5874361',
      rating: 4.29,
      ratingCount: 298,
      imageUrl: 'assets/images/Wolf of The Willow.svg',
      price: 19.99,
      bulkPrice: 17.99
  },
  {
      name: 'Darker Ritual',
      untappdUrl: 'https://untappd.com/b/deeds-brewing-darker-ritual/4926151',
      ratingCount: 116,
      imageUrl: 'assets/images/Darker Ritual.svg',
      price: 19.99,
      bulkPrice: 17.99
  },
  {
      name: 'Witching Hour',
      untappdUrl: 'https://untappd.com/b/hawkers-beer-witching-hour/5874361',
      rating: 4.04,
      ratingCount: 167,
      imageUrl: 'assets/images/Witching Hour.svg',
      price: 12.99,
      bulkPrice: 10.99
  },
  {
      name: 'Lark Barrel Age',
      untappdUrl: 'https://untappd.com/b/hawkers-beer-witching-hour/5874361',
      rating: 4.29,
      ratingCount: 298,
      imageUrl: 'assets/images/Wolf of The Willow.svg',
      price: 19.99,
      bulkPrice: 17.99
  },
  {
      name: 'Darker Ritual B',
      untappdUrl: 'https://untappd.com/b/deeds-brewing-darker-ritual/4926151',
      rating: 4.39,
      ratingCount: 116,
      imageUrl: 'assets/images/Darker Ritual.svg',
      price: 19.99,
      bulkPrice: 17.99
  }
];

// Initialize the accumulator string
let darkbeersHTML = '';

// Accumulate HTML for each dark beer
darkbeers.forEach(darkbeer => {
    // Calculate rating width as a percentage
    const ratingWidth = (darkbeer.rating / 5) * 100;
    
    darkbeersHTML += `
        <div class="shop-product-card">
            <div>
                <a href="${darkbeer.untappdUrl}" class="shop-rating" target="_blank">
                    ${darkbeer.rating} <span class="small-text">(${darkbeer.ratingCount})</span>
                </a>
            </div>
            <div class="rating-bar">
                <div class="rating-fill" style="width: ${ratingWidth}%;"></div>
            </div>
            <div class="shop-name">${darkbeer.name}</div>
            <img src="${darkbeer.imageUrl}" alt="${darkbeer.name}" class="shop-product-image">
            <div class="shop-prices">
                <span class="shop-price1">
                    <span class='shop-dollar'>$ </span>${Math.floor(darkbeer.price)}
                    <span class='shop-dollar'>.${(darkbeer.price % 1).toFixed(2).slice(2)}</span>
                </span>
                <span class="shop-price1">
                    <span class='shop-dollar'>$ </span>${Math.floor(darkbeer.bulkPrice)}
                    <span class='shop-dollar'>.${(darkbeer.bulkPrice % 1).toFixed(2).slice(2)} </span>
                    <span class="small-text">(x2)</span>
                </span>
            </div>
        </div>
    `;
});
// Insert the accumulated HTML into the container
document.querySelector('.js-load-dark-beer').innerHTML = darkbeersHTML;
