(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    }

  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {}; // reset the review
    }
  });

  app.directive('productTitle', function () {
    return {
      restrict: 'E',
      templateUrl: 'product-title.html',
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'This gem type is my favorite',
      canPurchase: true,
      soldOut: false,
      images: [
        {
           full: 'test.jpg',
           thumb: 'thumb.jpg',
        },
        {
           full: 'test2.jpg',
           thumb: 'thumb2.jpg',
        },
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "my@example.com",
        },
        {
          stars: 1,
          body: "this product is sucks!",
          author: "tm@example.com",
        },
      ],
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Super great high performance gem',
      canPurchase: true,
      soldOut: false,
      images: [
        {
           full: 'test.jpg',
           thumb: 'thumb.jpg',
        },
        {
           full: 'test2.jpg',
           thumb: 'thumb2.jpg',
        },
      ],
      reviews: [
        {
          stars: 3,
          body: "Awesome product!",
          author: "nick@example.com",
        },
        {
          stars: 4,
          body: "You should buy this product right now:)",
          author: "milk@example.com",
        },
      ],
    }

  ];
})(); /* wrapping your javascript in a closure is good habit*/
