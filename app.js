const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = process.env.ENV || 'local';
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const doLogging = true;

var app = express();


//------------------------------------------------------------------------------
// Request Pre-processing & middleware
//------------------------------------------------------------------------------

// // Allows parsing of req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // Sanitise inputs (req.body, req.query and req.params)
// app.use(mongoSanitize());

// // Allow cross-origin HTTP requests
app.use(cors({
    origin: '*'
}));

//------------------------------------------------------------------------------
// Express Setup
//------------------------------------------------------------------------------

var router = express.Router();

if (env == 'local') {
    app.use(express.static(path.join(__dirname, '/')));
} else {
    app.use(express.static(path.join(__dirname, '/build/es6-unbundled')));
}

// Prefix for all routes
app.use('/api', router);

// Start server
console.log("Running in " + env);
console.log("Server starting on " + host + ':' + port);
module.exports = app.listen(port, function (err) {
    if (err) {
        console.error("Failed to start server!");
        console.error(err);
        return process.exit(1);
    }
});

//------------------------------------------------------------------------------
// Database Kappa
//------------------------------------------------------------------------------

db = [{
        name: 'overlay 1',
        lat: 50.900202990685784,
        lng: -0.9297653110717192,
        hdg: 324,
        videoURL: 'https://www.videvo.net/videvo_files/converted/2016_01/preview/Forest_15_3b_Videvo.mov47209.webm'
    },
    {
        name: 'overlay 2',
        lat: 50.925202990685784,
        lng: -0.9297653110717192,
        hdg: 324,
        videoURL: 'https://www.videvo.net/videvo_files/converted/2016_01/preview/Forest_15_3b_Videvo.mov47209.webm'
    }
]

//------------------------------------------------------------------------------
// Routes
//------------------------------------------------------------------------------

// Do this before all requests
router.use(function (req, res, next) {
    log('\nReceived: ' + req.method + ' ' + req.url);
    var hasBody = Object.keys(req.body).length;
    if (hasBody) {
        log(req.body);
    }
    next();
});

router.get('', (req, res) => {
    res.json(db);
});

router.post('', (req, res) => {
    console.log(req.body);    
    db.push(req.body);
    res.send('OK');
});

// Do this after all requests
router.use(function (req, res, next) {
    log('Responding to request with status: ' +
        res.statusCode + ' ' + res.statusMessage);
    res.end();
});

function log(text) {
    if (doLogging) {
        console.log(text);
    }
}