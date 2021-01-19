const express = require("express");
const csv = require('csv-parser');
const fs = require('fs');

const app = express();


const PORT = 3000;

//TODO: Implement a reject call in case 
function readData() {
    return new Promise((resolve, reject)=>{
        const arr = [];
        fs.createReadStream('data/DataTest.csv')
            .pipe(csv())
            .on('data', (row) => {
                
                arr.push(row);
                console.log(arr);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            resolve(arr);
        });
    });
}


app.use(express.static('public'));

app.get('/test', (req, res)=>{
    res.send('this is from the back end!');
});

app.get('/data', async (req,res)=>{
    try {
        const data = await readData();
        res.send(data);
    } catch(err) {
        res.send(err);
    }
});


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}.`);
});
