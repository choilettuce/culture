require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'http://apis.data.go.kr/B551011/KorService1';

async function fetchTourismInfo() {
    try {
        const response = await axios.get(`${BASE_URL}/locationBasedList`, {
            params: {
                serviceKey: API_KEY,
                MobileApp: 'AppTest',
                MobileOS: 'ETC',
                arrange: 'A',
                contentTypeId: '12',
                mapX: '126.981611',
                mapY: '37.568477',
                radius: '1000',
                listYN: 'Y',
                numOfRows: '10',
                pageNo: '1',
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