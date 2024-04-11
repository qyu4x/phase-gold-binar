function findOne(executed) {

    return new Promise((resolve, reject) => {
        // handle appaun itu code async, proses apapun itu async
        if(executed) {
            setTimeout(() => {
                resolve("result async")
            },  1000)
        }else {
            reject("upps error")
        }

    })

}


const cancelBooking = async () => {
    try {
        const result = await findOne(true);
        console.log(result)
        console.log("done... 1")
    }catch (error) {
        console.log(error.message.toString())
    }
}

cancelBooking();
console.log("done...")
