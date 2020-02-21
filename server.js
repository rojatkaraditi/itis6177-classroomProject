const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express()

const port = 3000

app.use(cors());

app.get('/',(request,response)=>{
    axios.get('https://t3tb5kidqg.execute-api.us-east-2.amazonaws.com/default/HelloWorld').then(resp=>{
        response.send(resp.data);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))