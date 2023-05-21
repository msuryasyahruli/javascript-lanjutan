const generateId = (num) => {
    return new Promise((resolve, reject) => {
        if (typeof (num) !== "number") {
            reject('Parameter harus number')
        }
        setTimeout(() => {
            function getRandom() {
                return Math.floor(Math.random() * 10 * Math.pow(10, num-1));
                }
            resolve(getRandom())
        }, 1000)
    })
}

generateId(10)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })