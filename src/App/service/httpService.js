import axios from "axios";
import configFile from "../config.json";

axios.defaults.baseURL = configFile.apiEndPoint;

axios.interceptors.request.use(
    async function (config) {
        if (configFile.isFireBase) {
            const containSlash = /\/$/gi.test(config.url);
            config.url =
                (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (res) => res,
    function (error) {
        const expectedError =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedError) {
            console.log("Something was wrong. Try it later");
        }
        return Promise.reject(error);
    }
);
const httpService = {
    get: axios.get
};
export default httpService;
