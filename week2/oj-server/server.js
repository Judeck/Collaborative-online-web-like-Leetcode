const express = require('express');
const app = express();
const path = require('path');
// connect mongoDb
const mongoose = require('mongoose');
mongoose.connect('mongodb://kun:xxxxx@ds125556.mlab.com:25556/cs503-1705-kun');

const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, '../public/')));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);

app.use((req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/')});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));