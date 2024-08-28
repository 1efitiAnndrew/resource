const express = require('express')
const app = express()

//route
app.get('/', (req, res) =>{
    res.send('Hello Andrew')
})
app.listen(3000, () =>{console.log('Andrew is coding at port 3000')})
