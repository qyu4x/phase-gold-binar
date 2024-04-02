function findProductById() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = { id: 2, name: "Macbook Pro m1 2021", price: 21000000 };
            if (product) {
                resolve(product);
            } else {
                reject(new Error("Product not found"));
            }
        }, 1000); // Delay simulasi 1 detik
    });
}


findProductById()
    .then((data) => console.log(data))
    .catch((error) => console.log(error.toString()))
