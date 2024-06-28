const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs').promises; 
const qr = require('qrcode');

const app = express();
const PORT = 3000;
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/generate', async (req, res) => {
    const url = req.body.url;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const qrCodeFileName = 'qr-code.png'; 
    const qrCodeFilePath = path.join(__dirname, 'public', qrCodeFileName);

    try {
        await fs.mkdir(path.join(__dirname, 'public'), { recursive: true });

        await qr.toFile(qrCodeFilePath, url);
        console.log('QR code generated successfully');
        res.json({ qrCodeUrl: `/${qrCodeFileName}` });
    } catch (err) {
        console.error('Failed to generate QR code:', err);
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
