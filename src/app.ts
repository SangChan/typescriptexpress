import express from 'express'

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const users = [
    { id: 1, name: "유저1" },
    { id: 2, name: "유저2" },
    { id: 3, name: "유저3" }
];

app.get('/', (req, res, next) => {
    res.send('Hello')
})

app.get("/api/users", (req, res) => {
    res.json({ok: true, users: users});
})

app.get("/api/users/user", (req, res) => {

    const user_id = req.query.user_id
    const user = users.filter(data => data.id == user_id);

    res.json({ok: false, user: user})
})

app.get("/api/users/userBody", (req, res) => {

    const user_id = req.body.user_id
    const user = users.filter(data => data.id == user_id);

    res.json({ok: false, user: user})
})

app.get("/api/users/:user_id", (req, res) => {

    const user_id = req.params.user_id
    const user = users.filter(data => data.id == user_id);

    res.json({ok: true, user: user})
})

app.post("/api/users/add", (req, res) => {

    const { id, name } = req.body
    const user = users.concat({id, name});

    res.json({ok: true, users: user})
})

app.put("/api/users/update", (req, res) => {
    
    const { id, name } = req.body

    const user = users.map(data => {

        if(data.id == id) data.name = name

        return {
            id: data.id,
            name: data.name
        }
    })

    res.json({ok: true, users: user})
})

app.patch("/api/user/update/:user_id", (req, res) => {

    const { user_id} = req.params
    const { name } = req.body

    const user = users.map(data => {

        if(data.id == user_id) data.name = name

        return {
            id: data.id,
            name: data.name
        }
    })

    res.json({ok: true, users: user})
})

app.delete("/api/user/delete", (req, res) => {

    const user_id = req.query.user_id
    const user = users.filter(data => data.id != user_id );

    res.json({ok: true, users: user})
})


app.listen(12345, () => {
    console.log('Server running')
})