console.log("This is on the client");
fetch('http://localhost:3000/data')
.then(res => res.json())
.then(data => console.table(data))
.catch(err => console.log(err));