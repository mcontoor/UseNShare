//import packages
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());


const PORT = 5000;

app.listen(PORT, () => console.log('Server listening for requests on port ' + PORT));