import axios from "axios";
import queryString from "query-string"

 /**
 * Config axios
 * Author: Biển - 02/01/23
 */
const axiosClient = axios.create({
	baseURL: "https://localhost:7185/api",
	headers: {
		"content-type": "application/json",
	},
	paramsSerializer: {
		encode: queryString.parse,
		serialize: (params) => queryString.stringify(params),
	},
});

/**
 * Config response
 * Author: Biển - 02/01/23
 */
 axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	(error) => {
		return error;
	}
);

export default axiosClient;