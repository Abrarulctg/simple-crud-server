const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Simple CRUD is Running");
})



app.listen(port, () => {
    console.log(`Simple CRUD is running on Port:  ${port}`);
})