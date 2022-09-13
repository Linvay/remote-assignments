function avg(data) {
    return data.products.reduce((sum, item) => 
        sum + item.price,
        0) / data.size;
}

console.log(
    avg({
        size: 3,
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 100,
            },
            {
                name: 'Product 3',
                price: 100,
            },
        ],
    })
); // should print the average price of all products