// // import axios from 'axios';
// const axios = require('axios');

// const BASE_URL ='https://youtube-v31.p.rapidapi.com';

// const options = {
  
//   params: {
//     maxResults : '50',
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// export const fetchFromAPI = async(url)=>{
//    const {data} = await axios.get( `${BASE_URL}/${url}`,options);
//    return data;
// };

import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '29014b346amsh347f8b6b805d5b6p16fbbbjsn7014be4426b4',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
