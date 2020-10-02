let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let dotenv = require('dotenv');
let ejs = require('ejs');



// Engine Template
app.set('view engine', 'ejs')

// Config Dotenv
dotenv.config()
let PORT = process.env.URL_PORT || 3000 ;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))




app.get('/', (req,res) => {

   

    res.render('index' )
})







app.listen(PORT, () => {
    console.log("Listenig on port 3000")
})