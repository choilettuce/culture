require('dotenv').config();
const axios = require('axios');

const API_KEY = `34890efa-6e8f-45c6-8029-9d28c9728554`;
const BASE_URL = 'http://api.kcisa.kr/openapi/API_TOU_048/request';

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

        const data = response.data.response.body.items.item.Json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching tourism info:', error);
    }
}

fetchTourismInfo();

