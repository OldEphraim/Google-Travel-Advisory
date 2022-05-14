import axios from 'axios';


export const getPlacesData = async (type, ne, sw) => {
  try {
    // request; const response is destructured below
    const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': 'a1464763b5msh09429d0578a9067p13fbeajsn7db5531fecef'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getWeatherData = async (lat, lng) => {
  try {
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
      params: {
  lat: lat,
  lon: lng,
},
headers: {
  'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
  'X-RapidAPI-Key': 'a1464763b5msh09429d0578a9067p13fbeajsn7db5531fecef'
}
    })
    return data;
  } catch (error) {
    console.log(error);
  }
}
