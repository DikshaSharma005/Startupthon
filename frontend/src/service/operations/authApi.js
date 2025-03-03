import { authEndpoints } from "../api";
import { apiConnector } from "../apiConnector";
const { login } = authEndpoints;

export const loginSystem = async (email, password, navigate) => {
  try {
    const response = await apiConnector("POST", login, { email, password });

    if (!response.data.success) {
      console.log(response.data.message);
    }

    localStorage.setItem("token", JSON.stringify(response.data.accessToken));
    localStorage.setItem("name", JSON.stringify(response.data.user.name));
    navigate("/challenges");
  } catch (error) {
    console.error(error.response.data.message);
  }
};
