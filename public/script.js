var app = new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [
          { id: 1, title: 'Item 1', price: 9.99 },
          { id: 2, title: 'Item 2', price: 19.99 },
          { id: 3, title: 'Item 3', price: 5.99 },
          { id: 4, title: 'Item 4', price: 31.99 },
          { id: 5, title: 'Item 5', price: 2.99 }
        ],
        cart: []
    },
    filters: {
      monetaryValue: function(value, currencyType) {
            switch (currencyType) {
              case 'R$':
                value = value * 3.15
                break;
              default:
            }

            return currencyType + _.round2Fixed(value)
        }
    },
    methods: {
        addToCart: function(index) {
            var item = this.items[index];
            var cartItem = this.cart.filter(function(carItem) {
              return carItem.id === item.id;
            });

            if (this.hasItems(cartItem)) {
              cartItem.shift().qty++;
            } else {
              this.addItem(this.cart, {
                id: item.id,
                title: item.title,
                price: item.price,
                qty: 1
              })
            }

            this.updateTotal(item);
        },
        addItem: function(list, item) {
          list.push(item);
        },
        hasItems: function(list) {
          return list.length > 0
        },
        updateTotal: function(item) {
          this.total += item.price;
        }
    }
});
