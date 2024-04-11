class DataNotFoundException extends Error {
    constructor(message) {
        super(message);
    }
}

function findProductById() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = { id: 2, name: "Macbook Pro m1 2021", price: 21000000 };
            if (product) {
                resolve(product);
            } else {
                reject(new DataNotFoundException("Product not found"));
            }
        }, 1000); // Delay simulasi 1 detik
    });
}

const findProductRequest = async () => {
    try {
        const data = await findProductById();
        console.log("test data")
        console.log(typeof data)
        console.log(data) // jika ingin di return lagi, tolong handle dengan await/ then, try catch
    }catch (error) {
        if (error instanceof DataNotFoundException) {
            console.log(error.message.toString())
        }
    }
}

findProductRequest();

