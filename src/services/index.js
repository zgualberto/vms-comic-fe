import axios from "axios";

export default class ApiService {
  static async getApiComics(page = 1) {
    return await new Promise((resolve, reject) => {
      axios
        .get(`${process.env.VUE_APP_API_URL}/comics`, {
          params: {
            page,
          },
          headers: {
            Authorization: "foo_bar",
          },
        })
        .then(({ data }) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
