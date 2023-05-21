// a. menggunakan callback

const panggilTitle = (method, url, callback) => {
    const ajax = new XMLHttpRequest()
    ajax.open(method, url)
    ajax.send()
    ajax.onreadystatechange = () => {
        if (ajax.status === 200) {
            const result = JSON.parse(ajax.responseText)
            callback(result)
        } else {
            console.log('error!!!')
        }
    }
}

panggilTitle('GET', 'https://jsonplaceholder.typicode.com/posts', (result) => {
    result.map((item) => {
        console.log(`title : `, item.title)
    })
})

// b. menggunakan promise

const getTitle = (method, url) => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest()
        ajax.open(method, url)
        ajax.send()
        ajax.onreadystatechange = () => {
            if (ajax.status === 200) {
                const result = JSON.parse(ajax.responseText)
                resolve(result)
            } else {
                reject('error!!!')
            }
        }
    })
}

getTitle('GET', 'https://jsonplaceholder.typicode.com/posts',)
    .then((res) => {
        res.map((item) => {
            console.log(`title : `, item.title)
        })
    })
    .catch((err) => {
        console.log(err)
    })