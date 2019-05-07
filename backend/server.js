const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

//Connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mySQL database connected')
})


const PORT = 5000;

app.listen(PORT, () => console.log('Server listening for requests on port ' + PORT));