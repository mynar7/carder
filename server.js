const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const apiRouter = require('./routes/api-routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('bizcard/dist/bizcard'));

app.use('/api', apiRouter);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './bizcard/dist/bizcard/index.html'));
});

app.listen(PORT, function() {
    console.log('app listening on PORT http://localhost:' + PORT);
})