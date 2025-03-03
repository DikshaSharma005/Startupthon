import { founderEndpoints } from "../api";
import { apiConnector } from "../apiConnector";

const { createFounder, deleteFounder, fetchDataOfFounder } = founderEndpoints;

const token = JSON.parse(localStorage.getItem("token"));

export const createFounderSystem = async ({
  name,
  description,
  founderImage,
  position,
}) => {
  try {
    const response = await apiConnector(
      "POST",
      createFounder,
      { name, description, founderImage, position },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      console.log(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const deleteFounderSystem = async (founderId) => {
  try {
    const response = await apiConnector(
      "DELETE",
      deleteFounder,
      { founderId },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      console.log(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const founderDataSystem = async () => {
  try {
    const response = await apiConnector("GET", fetchDataOfFounder, {});

    if (!response.data.success) {
      console.log(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};
