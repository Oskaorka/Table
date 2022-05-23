import httpService from "./httpService";

const getData = {
    get: async () => {
        const { data } = await httpService.get("data");
        return data;
    }
};
export default getData;
