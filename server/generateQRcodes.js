const axios = require('axios')
const QRCode = require('qrcode')
const fs = require('fs')

const BASE_URL ='https://dahlia-petal-ledger.netlify.app/'
const API_URL = 'http://localhost:5000/inventory'

async function fetchAllTubers () {
    try {
        const res = await axios.get(API_URL);
        return res.data;
    } catch (err) {
        console.error("Failed to fetch tubers:", err.message)
        return [];
    }
}