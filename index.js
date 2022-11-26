const express = require('express')



const app = express()
const port = 3000


app.
use(express.json()).
get('/', function (req, res) {
    res.send('Hello World!')
}).
get('/sinan', (req, res) => {
    res.send("sinan was here");
}).
post('/test', (req, res) => {
    const responseBody = {};
    responseBody.greetings = `Welcome ${req.body.name.toUpperCase()}`;
    responseBody.bye = `Bye ${req.body.surname.toUpperCase()}`;

    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(responseBody));
}).
get('/test', (req, res) => {
    res.send("xd");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
