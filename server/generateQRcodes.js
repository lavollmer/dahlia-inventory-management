const axios = require('axios');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Netlify
const BASE_URL = 'https://dahlia-petal-ledger.netlify.app/';

// backend
const API_URL = 'https://dahlia-petal-ledger.onrender.com';

async function fetchAllTubers() {
  try {
    const res = await axios.get(`${API_URL}/tubers`);
    return res.data; 
  } catch (err) {
    console.error("Failed to fetch tubers:", err.message);
    return [];
  }
}

async function generateQRCodes() {
  const tubers = await fetchAllTubers();

  const qrDir = path.join(__dirname, 'qr_codes');
  if (!fs.existsSync(qrDir)) {
    fs.mkdirSync(qrDir);
  }

  for (const tuber of tubers) {
    const url = `${BASE_URL}tuber/${tuber._id}`;
    const safeName = tuber.name?.replace(/[\/\\:*?"<>|]/g, '_') || 'unknown';
    const outputFile = path.join(qrDir, `${safeName}_${tuber._id}.png`);

    try {
      await QRCode.toFile(outputFile, url, {
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
        margin: 2,
        width: 300,
      });
      console.log(`✅ QR code saved: ${outputFile}`);
    } catch (err) {
      console.error(`❌ Error generating QR for ${tuber._id}:`, err.message);
    }
  }
}

generateQRCodes();