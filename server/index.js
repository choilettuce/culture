require('dotenv').config();
const axios = require('axios');

const API_KEY = 'EUkzUfkVUFB7oDqgGx4XVpjLkvW/nteSjzf36oVmOSTfZjdtmXEEskutvUQOONAOXSNC32eE50bvbX3Ng8DBOw==';
const BASE_URL = 'http://apis.data.go.kr/B551011/KorService1';

async function fetchTourismInfo() {
    try {
        const response = await axios.get(`${BASE_URL}/areaCode1?serviceKey=${API_KEY}`, {
            params: {
                numOfRows: '10',
                MobileApp: 'AppTest',
                MobileOS: 'ETC',
                _type: 'json'
            }
        });

        const data = response.data;
        console.log(data);
    } catch (error) {
        console.error('Error fetching tourism info:', error);
    }
}

fetchTourismInfo();

module.exports = fetchTourismInfo();