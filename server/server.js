const express = require('express');

const path = require('path');
const publicpath = path.join(__dirname, '../public');
const app = express();
const port = process.env.PORT || 3000 
app.use(express.static(publicpath));
app.listen(port, ()=> {
    console.log(`Server is running port ${port}`);
})
