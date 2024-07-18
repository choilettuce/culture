import axios from 'axios';

const API_KEY = 'EUkzUfkVUFB7oDqgGx4XVpjLkvW%2FnteSjzf36oVmOSTfZjdtmXEEskutvUQOONAOXSNC32eE50bvbX3Ng8DBOw%3D%3D';  
const BASE_URL = 'http://apis.data.go.kr/B551011/KorService/areaBasedList';  

export const fetchTourismData = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        serviceKey: API_KEY,
        numOfRows: 10,
        pageNo: 1,
        MobileApp: 'AppTest',
        MobileOS: 'ETC',
        arrange: 'A',
        contentTypeId: 12, // 관광타입 (관광지, 숙박 등)
        _type: 'json' // JSON 형식으로 데이터 받기
      }
    });
    return response.data.response.body.items.item;
  } catch (error) {
    console.error('Error fetching tourism data:', error);
    throw error;
  }
};

export default fetchTourismData;