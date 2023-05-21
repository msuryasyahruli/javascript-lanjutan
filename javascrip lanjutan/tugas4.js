fetch ('https://jsonplaceholder.typicode.com/todos')
.then ((res)=>{
    return res.json()
})
.then ((res)=>{
    res.map((item)=>{
        console.log(`title : `, item.title)
    })
})