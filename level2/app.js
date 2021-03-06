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

    }

  ];
})(); /* wrapping your javascript in a closure is good habit*/
