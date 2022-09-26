import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID XjPXJ2hHm54KILO4NhmCdSO8Oao2CjtRUTJ5Tgw8gwk",
      }
});