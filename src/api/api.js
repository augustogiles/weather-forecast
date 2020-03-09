import axios from 'axios';

const URI = process.env.REACT_APP_API_URL;
const BASE_URL = `https://cors-anywhere.herokuapp.com/${URI}`;

const config = {
  baseURL: BASE_URL,
  timeout: 5000
};

const api = axios.create(config);

export function getStaticIcon(weather_state_abbr) {
  return `${URI}static/img/weather/png/64/${weather_state_abbr}.png`;
}

export function getCountryByLattLong({ lat, long }) {
  return api.get(`api/location/search/?lattlong=${lat},${long}`);
}

export async function getCountryByWoeid({ woeid }) {
  return api.get(`api/location/${woeid}`);
}

export function getCountryByQueryName({ name }) {
  return api.get(`api/location/search/?query=${name}`);
}
