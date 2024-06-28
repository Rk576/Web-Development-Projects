/*function generateQRCode() {
    const url = document.getElementById('urlInput').value;
    if (!url) {
        alert('Please enter a URL');
        return;
    }
    
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
    })
    .then(response => response.json())
    .then(data => {
        const qrCodeImg = document.createElement('img');
        qrCodeImg.src = data.qrCodeUrl;
        qrCodeImg.id = 'qrCodeImg';
        const qrCodeDiv = document.getElementById('qrCode');
        qrCodeDiv.innerHTML = '';
        qrCodeDiv.appendChild(qrCodeImg);
        document.getElementById('downloadButton').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
}

function downloadQRCode() {
    const qrCodeImg = document.getElementById('qrCodeImg');
    const link = document.createElement('a');
    link.href = qrCodeImg.src;
    link.download = 'qr-code.png';
    link.click();
}*/