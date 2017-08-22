var app = new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [
          { id: 1, title: 'Item 1'},
          { id: 2, title: 'Item 2'},
          { id: 3, title: 'Item 3'},
          { id: 4, title: 'Item 4'},
          { id: 5, title: 'Item 5'}
        ],
        cart: []
    },
    computed: {
        formattedTotal: function() {
            return '$' + _.round2Fixed(this.total)
        }
    },
    methods: {
        addItem: function(index) {
            this.total += 9.99;
            var item = this.items[index];
            var cartItem = this.cart.filter(function(carItem) {
              return carItem.id === item.id;
            });

            if (cartItem.length > 0) {
              cartItem.shift().qty++;
            } else {
              this.cart.push({
                id: item.id,
                title: item.title,
                qty: 1
              });
            }
        },
        hasCartItems: function() {
          return this.cart.length > 0
        }
    }
});
