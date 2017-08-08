import axios from 'axios';


export const FETCH_ADS = 'fetch_ads';
export const FETCH_MORE_ADS = 'fetch_ads';
export const FETCH_SINGLE_AD = 'fetch_ad';
export const LOGIN_USER = 'login_user';

let PAGE_COUNT = 3;

const ROOT_URL = 'http://localhost:3004' ;

export function fetchAds(){
  PAGE_COUNT -= 1;
  const request = axios.get(`${ROOT_URL}/data?_page=${PAGE_COUNT}&_limit=20`);
  if(PAGE_COUNT < 2){
    return{
      type: FETCH_MORE_ADS,
      payload: request
    };
  }
  else{
    return{
      type: FETCH_ADS,
      payload: request
    };
  }
}

export function fetchAd(advertisement_id){
  const request = axios.get(`${ROOT_URL}/data?advertisement_id=${advertisement_id}`);
  return{
    type: FETCH_SINGLE_AD,
    payload: request
  };
}
//
export function LoginUser(values) {
  return {
    type: LOGIN_USER,
    payload: values
  }
}

// export function LoginUser(values, callback) {
//   const new_promise = new Promise( (resolve, reject) => {
//     resolve((values) => {
//       return{
//         type: FETCH_SINGLE_AD,
//         payload: values
//       };
//     })
//   })
//   new_promise.then(callback)
// };
