import React, { useEffect } from 'react';
import dotenv from 'dotenv';

dotenv.config()

const KakaoMap = () => {
    const kakaoapikey = process.env.REACT_APP_KAKAO_KEY
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoapikey}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
      });
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '500px',
      }}
    ></div>
  );
};

export default KakaoMap;