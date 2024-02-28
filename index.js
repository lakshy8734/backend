const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const port = 5000;
const mongoDb = require("./db");
mongoDb();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://frontend-omega-three-84.vercel.app/");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello world");
})

app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/Displaydata'));
app.use('/api', require('./Routes/OrderData'));

app.listen(port, () => {
    console.log(`app listening on ${port}`);
})