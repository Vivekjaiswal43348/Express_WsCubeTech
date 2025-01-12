let express = require('express');

let app  = express();

app.get('/', (req, res)=>{
    res.send({status: 200, msg: "This is default route!"})
});

app.get('/detail', (req, res)=>{
    let jsonData = {
        name: 'Vinod',
        age: 30,
        msg: "This is detail page route!"
    }
    // JSON.stringify(jsonData) is not needed here, bcz we are using express framework
    res.send({status: 200, jsonData})
});

app.listen(8081);