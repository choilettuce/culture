import axios from 'axios';

const API_KEY = 'EUkzUfkVUFB7oDqgGx4XVpjLkvW%2FnteSjzf36oVmOSTfZjdtmXEEskutvUQOONAOXSNC32eE50bvbX3Ng8DBOw%3D%3D';  // 발급받은 API 키를 입력합니다.
const BASE_URL = 'https://api.publicdata.go.kr/your-api-endpoint';  // 사용하려는 API의 기본 URL을 입력합니다.

export const fetchPublicData = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        serviceKey: API_KEY,
        // 추가적인 파라미터가 필요하다면 여기에 추가
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching public data:', error);
    throw error;
  }
};