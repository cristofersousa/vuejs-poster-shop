var app = new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [{
            id: 1,
            title: 'Item 1',
            price: 9.99
        }, {
            id: 2,
            title: 'Item 2',
            price: 19.99
        }, {
            id: 3,
            title: 'Item 3',
            price: 5.99
        }, {
            id: 4,
            title: 'Item 4',
            price: 31.99
        }, {
            id: 5,
            title: 'Item 5',
            price: 2.99
        }],
        cart: []
    },
    methods: {
        addToCart: function(index) {
            var item = this.items[index];
            var cartItem = this.findItemByKey(this.cart, item, 'id');

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
        updateTotal: function(item) {
            this.total += item.price;
        },
        addItem: function(list, item) {
            list.push(item);
        },
        hasItems: function(list) {
            return list.length > 0
        },
        findItemByKey: function(list, item, filterKey) {
            return list.filter(function(listItem) {
                return listItem['filterKey'] === item['filterKey'];
            });
        },
        removeItemByKey: function(list, item, filterKey) {
            list.forEach(function(listItem, index) {
                if (listItem[filterKey] === item[filterKey]) {
                    list.splice(index, 1);
                }
            })
        },
        increaseQty: function(item) {
            var cartItem = this.findItemByKey(this.cart, item, 'id');
            if (this.hasItems(cartItem)) {
                var foundedCartItem = cartItem.shift();
                foundedCartItem.qty++;
            }
        },
        decreaseQty: function(item) {
            var cartItem = this.findItemByKey(this.cart, item, 'id');
            if (this.hasItems(cartItem)) {
                var foundedCartItem = cartItem.shift();
                foundedCartItem.qty--;

                if (foundedCartItem.qty === 0) {
                    this.removeItemByKey(this.cart, item, 'id');
                }
            }
        }
    }
});
