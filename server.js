const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require("body-parser");

const app = express()

const port = 3000

app.use(cors());

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/',(request,response)=>{
    axios.get('https://kbfafxfdz2.execute-api.us-east-1.amazonaws.com/one').then(resp=>{
    response.send(resp.data.body);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))