const products = [
  {
      producer: "Hawkers Beer",
      name: "Witching Hour",
      type: "Imperial Porter",
      abv: "9%",
      volume: 440,
      location: "Reservoir",
      price1: "12.99",
      price2: "10.99",
      rrp: "$14",
      imgSrc: "./images/Witching Hour.svg",
      quote: "Don't fear the darkest hour of night",
      ratingLink: "https://untappd.com/b/hawkers-beer-witching-hour/5874361",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "4.01 / 5",
      bundleQuantity: "2"
  },
  {
      producer: "Hawkers Beer",
      name: "Bourbon Barrel Aged",
      type: "White Stout (2024)",
      abv: "6%",
      volume: 440,
      location: "Reservoir",
      price1: "10.99",
      price2: "9.49",
      rrp: "$12",
      imgSrc: "./images/bba.svg",
      quote: "There cannot be darkness without the light",
      ratingLink: "https://untappd.com/b/hawkers-beer-bourbon-barrel-aged-white-stout-2024/5873622",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "3.82 / 5",
      bundleQuantity: "2"

  },
  {
      producer: "Wolf of The Willow",
      name: "Lark Barrel Aged",
      type: "Imperial JSP V",
      abv: "12.4%",
      volume: 440,
      location: "Mordialloc",
      price1: "19.99",
      price2: "17.99",
      rrp: "$22",
      imgSrc: "./images/Wolf of The Willow.svg",
      quote: "An Imperial Smoke Porter rich with wh",
      ratingLink: "https://untappd.com/b/hawkers-beer-witching-hour/5874361",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "4.29 / 5",
      bundleQuantity: "2"

  },
  {
      producer: "Sailors Grave ",
      name: "Zserbó",
      type: "Festive Stout",
      abv: "6%",
      volume: 355,
      location: "Orbost",
      price1: "7.99",
      price2: "6.99",
      rrp: "$9",
      imgSrc: "./images/Zserbó.svg",
      quote: "Based on the popular Hungarian de",
      ratingLink: "https://untappd.com/b/hawkers-beer-witching-hour/5874361",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "Only 1 left",
      bundleQuantity: "4"

  },
  {
      producer: "Bright Brewery",
      name: "Leaf Peeper",
      type: "Red Rye IPA",
      abv: "6.4%",
      volume: 440,
      location: "Bright",
      price1: "9.99",
      price2: "8.75",
      rrp: "$11",
      imgSrc: "./images/lEAF.svg",
      quote: "Like the autumn foliage that makes B!",
      ratingLink: "https://untappd.com/b/bright-brewery-leaf-peeper-red-rye-ipa/5776316",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "Only 3 left",
      bundleQuantity: "4"

  },
  {
      producer: "Deed Brewing",
      name: "Darker Ritual",
      type: "BBA Imperial Stout",
      abv: "13%",
      volume: 440,
      location: "Glen Iris",
      price1: "19.99",
      price2: "17.99",
      rrp: "$22",
      imgSrc: "./images/Darker Ritual.svg",
      quote: "As soon as we started sharing Dark Ritual at this y",
      ratingLink: "https://untappd.com/b/deeds-brewing-darker-ritual/4926151",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "Only 2 left",
      bundleQuantity: "2"

  },
  {
    producer: "Hawkers Beer",
    name: "Witching Hour",
    type: "Imperial Porter",
    abv: "9%",
    volume: 440,
    location: "Reservoir",
    price1: "12.99",
    price2: "10.99",
    rrp: "$14",
    imgSrc: "./images/Witching Hour.svg",
    quote: "Don't fear the darkest hour of night",
    ratingLink: "https://untappd.com/b/hawkers-beer-witching-hour/5874361",
    orderLink: "https://www.instagram.com/direct/t/17851876955786176",
    rating: "4.01 / 5",
    bundleQuantity: "2"
},
{
    producer: "Hawkers Beer",
    name: "Bourbon Barrel Aged",
    type: "White Stout (2024)",
    abv: "6%",
    volume: 440,
    location: "Reservoir",
    price1: "10.99",
    price2: "9.49",
    rrp: "$12",
    imgSrc: "./images/bba.svg",
    quote: "There cannot be darkness without the light",
    ratingLink: "https://untappd.com/b/hawkers-beer-bourbon-barrel-aged-white-stout-2024/5873622",
    orderLink: "https://www.instagram.com/direct/t/17851876955786176",
    rating: "3.82 / 5",
    bundleQuantity: "2"

},
{
    producer: "Wolf of The Willow",
    name: "Lark Barrel Aged",
    type: "Imperial JSP V",
    abv: "12.4%",
    volume: 440,
    location: "Mordialloc",
    price1: "19.99",
    price2: "17.99",
    rrp: "$22",
    imgSrc: "./images/Wolf of The Willow.svg",
    quote: "An Imperial Smoke Porter rich with wh",
    ratingLink: "https://untappd.com/b/hawkers-beer-witching-hour/5874361",
    orderLink: "https://www.instagram.com/direct/t/17851876955786176",
    rating: "4.29 / 5",
    bundleQuantity: "2"

},
{
    producer: "Sailors Grave ",
    name: "Zserbó",
    type: "Festive Stout",
    abv: "6%",
    volume: 355,
    location: "Orbost",
    price1: "7.99",
    price2: "6.99",
    rrp: "$9",
    imgSrc: "./images/Zserbó.svg",
    quote: "Based on the popular Hungarian de",
    ratingLink: "https://untappd.com/b/hawkers-beer-witching-hour/5874361",
    orderLink: "https://www.instagram.com/direct/t/17851876955786176",
    rating: "Only 1 left",
    bundleQuantity: "4"

},
{
    producer: "Bright Brewery",
    name: "Leaf Peeper",
    type: "Red Rye IPA",
    abv: "6.4%",
    volume: 440,
    location: "Bright",
    price1: "9.99",
    price2: "8.75",
    rrp: "$11",
    imgSrc: "./images/lEAF.svg",
    quote: "Like the autumn foliage that makes B!",
    ratingLink: "https://untappd.com/b/bright-brewery-leaf-peeper-red-rye-ipa/5776316",
    orderLink: "https://www.instagram.com/direct/t/17851876955786176",
    rating: "Only 3 left",
    bundleQuantity: "4"

},
{
    producer: "Deed Brewing",
    name: "Darker Ritual",
    type: "BBA Imperial Stout",
    abv: "13%",
    volume: 440,
    location: "Glen Iris",
    price1: "19.99",
    price2: "17.99",
    rrp: "$22",
    imgSrc: "./images/Darker Ritual.svg",
    quote: "As soon as we started sharing Dark Ritual at this y",
    ratingLink: "https://untappd.com/b/deeds-brewing-darker-ritual/4926151",
    orderLink: "https://www.instagram.com/direct/t/17851876955786176",
    rating: "Only 2 left",
    bundleQuantity: "2"

}

];
///load Products from offer data
let offerProductHTML = '';

products.forEach(product => {
    offerProductHTML += `
    <div class="product-offer-card">
      <div class="product-container">
        <div class="image-offer-wrapper">
            <img loading="lazy" src="${product.imgSrc}"  alt="${product.name}" />
            <div class="second-rotation"></div>
        </div>
        <div class="product-info">
            <p class="producer-name">${product.producer}</p>
            <p class="product-name">${product.name}</p>
            <p class="product-type">${product.type}</p>
            <p class="product-specs">${product.abv} <span class="small-bold-text">ABV</span>
                , ${product.volume}<span class="small-bold-text"> ml</span></p>
        </div>
        <div class="product-pricing">
            <p class="producer-location">${product.location}</p>
            <p class="price-first"><span class="dollar-text">$ </span>${product.price1} <span class="quantity">EACH</span> </p>
            <p class="price-second">${product.bundleQuantity}<span class="quantity"> FOR </span><span class="dollar-text">$ </span>${product.price2} </p>
            <p class="rrp">RRP: ${product.rrp}</p>
        </div>
      </div>
       <div class="quote-container">
                <div class="quote-text">
                    "${product.quote} <a href="${product.ratingLink}" class="more-link" target="_blank">... ${product.rating}</a><span>"</span>
                </div>
                <div class="order-button">
                    <a href="${product.orderLink}" target="_blank">
                        <button class="order-now">Claim Offer</button>
                    </a>
                </div>
            </div>
    </div>`;
});

  document.querySelector('.js-load-products').
  innerHTML = offerProductHTML;
