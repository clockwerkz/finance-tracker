const express = require("express");
const app = express();


const PORT = 3000;

app.use(express.static('public'));

app.get('/test', (req, res)=>{
    res.send('this is from the back end!');
});


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}.`);
});
