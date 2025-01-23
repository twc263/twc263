const products = [
    {
        producer: "Slow Lane Brewing",
        name: "Classis Haze",
        type: "Hefeweizen",
        abv: "5.6%",
        volume: 375,
        location: "NSW",
        price1: "5.49",
        price2: "19.99",
        rrp: "$6",
        imgSrc: "./images/Classis Haze.jpg",
        quote: "Hefeweizens are a traditional German wheat ale with",
        ratingLink: "https://untappd.com/b/slow-lane-brewing-classic-haze/4289840",
        orderLink: "https://www.instagram.com/direct/t/17851876955786176",
        rating: "3.66 / 5",
        bundleQuantity: "4"
    },
    {
        producer: "Slow Lane Brewing",
        name: "Conditioned",
        type: "Hazy Pale Ale",
        abv: "5.4%",
        volume: 375,
        location: "NSW",
        price1: "6.49",
        price2: "23.99",
        rrp: "$7",
        imgSrc: "./images/Conditioned.jpg",
        quote: "A combination of our favourite NZ and US hops",
        ratingLink: "https://untappd.com/b/slow-lane-brewing-conditioned/5433235",
        orderLink: "https://www.instagram.com/direct/t/17851876955786176",
        rating: "3.79 / 5",
        bundleQuantity: "4"
  
    },
    {
        producer: "Bacchus Brewing",
        name: "Hyperspatial",
        type: "Coffee Stout",
        abv: "7.8%",
        volume: 375,
        location: "QLD",
        price1: "11.99",
        price2: "22.99",
        rrp: "$13",
        imgSrc: "./images/Hyperspatial.jpg",
        quote: "Made with the finest coffee beans, for a true Espresso ",
        ratingLink: "https://untappd.com/b/bacchus-brewing-co-hyperspatial-espresso-stout/1793124",
        orderLink: "https://www.instagram.com/direct/t/17851876955786176",
        rating: "4.04 / 5",
        bundleQuantity: "2"
    },
    {
      producer: "Bacchus Brewing",
      name: "Hyperdelic",
      type: "Hazy IPA",
      abv: "7.4%",
      volume: 375,
      location: "QLD",
      price1: "11.99",
      price2: "22.99",
      rrp: "$13",
      imgSrc: "./images/Hyperdelic.jpg",
      quote: "A brand-new Hazy IPA showcasing 2 of the latest hype ",
      ratingLink: "https://untappd.com/b/bacchus-brewing-co-hyperdelic/6035227",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "4.15 / 5",
      bundleQuantity: "2"
  },
  {
      producer: "Bojak Brewing",
      name: "A Complex Juggle",
      type: "Hazy IPA",
      abv: "7.0%",
      volume: 440,
      location: "DANDENONG",
      price1: "10.99",
      price2: "20.99",
      rrp: "$12",
      imgSrc: "./images/A Complex Juggle.jpg",
      quote: "A delicious summer fruit combo of passionfruit, peach and ",
      ratingLink: "https://untappd.com/b/bojak-brewing-a-complex-juggle/6122699",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "",
      bundleQuantity: "2"
  },
  {
      producer: "Bojak Brewing",
      name: "Fence Sitter",
      type: "Oatcream Pale Ale",
      abv: "5.7%",
      volume: 375,
      location: "DANDENONG",
      price1: "6.49",
      price2: "23.99",
      rrp: "$7",
      imgSrc: "./images/Fence Sitter.jpg",
      quote: "Light straw in colour with a decent splash of lac ",
      ratingLink: "https://untappd.com/b/bojak-brewing-fence-sitter/6066113",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "3.93 / 5",
      bundleQuantity: "4"
  },
  {
      producer: "Bojak Brewing",
      name: "Velvet King",
      type: "Oatmeal Stout",
      abv: "5.2%",
      volume: 375,
      location: "DANDENONG",
      price1: "5.49",
      price2: "19.99",
      rrp: "$6",
      imgSrc: "./images/Velvet King.jpg",
      quote: "Roasty toasted oats bring this oatmeal stout to life ",
      ratingLink: "https://untappd.com/b/bojak-brewing-velvet-king/3296584",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "3.73 / 5",
      bundleQuantity: "4"
  },
  {
      producer: "Bright Brewery",
      name: "Staircase",
      type: "Porter",
      abv: "5.2%",
      volume: 375,
      location: "BRIGHT",
      price1: "6.49",
      price2: "23.99",
      rrp: "$7",
      imgSrc: "./images/Staircase.jpg",
      quote: "Complex layered flavours of creamy espresso, ",
      ratingLink: "https://untappd.com/b/bright-brewery-staircase-porter/38050",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "3.66 / 5",
      bundleQuantity: "4"
  },
  {
      producer: "Bright Brewery",
      name: "Hellfire",
      type: "Amber Ale",
      abv: "5%",
      volume: 375,
      location: "BRIGHT",
      price1: "5.99",
      price2: "21.99",
      rrp: "$6.49",
      imgSrc: "./images/Hellfire.jpg",
      quote: "Its fiery colour inspired us to name this beer after , ",
      ratingLink: "https://untappd.com/b/bright-brewery-hellfire-amber/19324",
      orderLink: "https://www.instagram.com/direct/t/17851876955786176",
      rating: "3.47 / 5",
      bundleQuantity: "4"
  },
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
              <p class="product-specs">${product.abv} <span class="small-text">ABV</span>
                  , ${product.volume}<span class="small-text"> ml</span></p>
          </div>
        <div class="product-pricing">
            <p class="producer-location">${product.location}</p>
            <p class="price-first"><span class="dollar-text">$ </span>
            ${Math.floor(product.price1)} <span class='shop-dollar'>${(product.price1 % 1).toFixed(2).slice(2)}</span>
            <span class="quantity">EACH</span> </p>
            <p class="price-second">${product.bundleQuantity}<span class="quantity"> FOR </span>
            <span class="dollar-text">$ </span>
            ${Math.floor(product.price2)} <span class='shop-dollar'>${(product.price2 % 1).toFixed(2).slice(2)}</span> </p>
            <p class="rrp" >RRP: ${product.rrp}</p>
        </div>
      </div>
       <div class="quote-container">
                <div class="quote-text">
                    "${product.quote} 
                    <a href="${product.ratingLink}" class="more-link" target="_blank">... ${product.rating}</a><span>"</span>
                </div>
                <div class="order-button">
                    <a href="${product.orderLink}" target="_blank">
                        <button class="order-now">GET NOW</button>
                    </a>
                </div>
            </div>
    </div>`;
  });
  
    document.querySelector('.js-load-products').
    innerHTML = offerProductHTML;
  