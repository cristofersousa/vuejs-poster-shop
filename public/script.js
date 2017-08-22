var app = new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [
          { title: 'Item 1'},
          { title: 'Item 2'},
          { title: 'Item 3'},
          { title: 'Item 4'},
          { title: 'Item 5'}
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
            console.log(index)
        }
    }
});
