const express = require('express');
const parser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log('listening to localhost:' + PORT));

app.use(parser.json());
app.use(express.static(__dirname));

app.post('/send-data', (req, res) => {
    const data = req.body;
    console.log(data.email);
    // do what ever you wanna do with the data
});
