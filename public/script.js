var app = new Vue({
    el: '#app',
    data: {
        total: 0
    },
    computed: {
        formattedTotal: function() {
            return '$' + _.round2Fixed(this.total)
        }
    }
});