const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});
router.get('', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

router.get('/fuigumi', (req, res) => {
    res.sendFile(path.join(__dirname + 'public/html/fuigumi.html'));
});

app.use('/', router);
app.listen(8000, () => console.log('jordun.com running on port 8000'));