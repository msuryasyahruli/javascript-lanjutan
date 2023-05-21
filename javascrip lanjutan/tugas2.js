const tampilkan = (method, url) => {
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

// a. then catch

tampilkan('GET', 'https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
        res.results.map((item) => {
            console.log(`nama : `, item.name)
            console.log(`url : `, item.url)
            const split = item.url.split("/")
            console.log(`image : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${split[6]}.png`)
        })
    })
    .catch((err) => {
        console.log(err)
    })

// b. async await

const getData = async () => {
    try {
        const result = await tampilkan('GET', 'https://pokeapi.co/api/v2/pokemon')
        result.results.map((item) => {
            console.log(`nama : `, item.name)
            console.log(`url : `, item.url)
            const split = item.url.split("/")
            console.log(`image : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${split[6]}.png`)
        })
    } catch (err) {
        console.log(err)
    }
}
getData()