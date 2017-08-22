Vue.filter('monetaryValue', function(value, currencyType) {
    switch (currencyType) {
        case 'R$':
            value = value * 3.15
            break;
        default:
    }

    return currencyType + _.round2Fixed(value)
})
