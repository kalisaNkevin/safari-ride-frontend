/* import apiUrlV1 from "utils/axiosInstance";

const UpdateToken = () => {
  return new Promise((resolve, reject) => {
    const refreshToken = localStorage.getItem("refreshToken");
    apiUrlV1
      .post("/auth/refreshToken", {
        token: refreshToken,
      })
      .then((response) => {
        const data = response.data.data;
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default UpdateToken; */

import apiUrlV1 from "utils/axiosInstance";

interface TokenResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

const UpdateToken = async (): Promise<TokenResponse["data"]> => {
  const refreshToken = localStorage.getItem("refreshToken");
  const response = await apiUrlV1.post<TokenResponse>("/auth/refreshToken", {
    token: refreshToken,
  });
  const data = response.data.data;
  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
  return data;
};

export default UpdateToken;
