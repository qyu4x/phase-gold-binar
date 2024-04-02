function findProductById(callback) {
    setTimeout(() => {
        const product = {id: 1, name: "Macbook pro m1", price: 2000000}
        callback(product)
    }, 1000)
}

findProductById((data) => {
    console.log(data)
})