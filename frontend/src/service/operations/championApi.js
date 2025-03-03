import { completerEndpoints } from "../api";
import { apiConnector } from "../apiConnector";

const { createCompleter, deleteCompleter, fetchDataOfCompleter } =
  completerEndpoints;

const token = JSON.parse(localStorage.getItem("token"));

export const createChampionSystem = async ({
  projectName,
  personName,
  description,
  fundingAmount,
  completerImage,
  position,
}) => {
  try {
    const response = await apiConnector(
      "POST",
      createCompleter,
      {
        projectName,
        personName,
        description,
        fundingAmount,
        completerImage,
        position,
      },
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

export const deleteChampionSystem = async (completerId) => {
  try {
    const response = await apiConnector(
      "DELETE",
      deleteCompleter,
      { completerId },
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

export const championDataSystem = async () => {
  try {
    const response = await apiConnector("GET", fetchDataOfCompleter, {});

    if (!response.data.success) {
      console.log(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};
