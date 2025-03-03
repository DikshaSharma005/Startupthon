import { challengesEndpoints } from "../api";
import { apiConnector } from "../apiConnector";
const {
  createChallenge,
  deleteChallengeForAdmin,
  fetchDataOfChallengeForAdmin,
  fetchDataOfChallengeForPublic,
  toggleChallengeForAdmin,
} = challengesEndpoints;

const token = JSON.parse(localStorage.getItem("token"));

export const createChallengeSystem = async ({
  title,
  description,
  fundingAmount,
  challengeImage,
  isPublic,
  deadlineChallenge,
}) => {
  try {
    const response = await apiConnector(
      "POST",
      createChallenge,
      {
        title,
        description,
        fundingAmount,
        challengeImage,
        isPublic,
        deadlineChallenge,
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

export const deleteChallenge = async (challengeId) => {
  try {
    const response = await apiConnector(
      "DELETE",
      deleteChallengeForAdmin,
      { challengeId },
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

export const publicData = async () => {
  try {
    const response = await apiConnector(
      "GET",
      fetchDataOfChallengeForPublic,
      {}
    );
    if (!response.data.success) {
      console.log(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.log(error)
    // console.error(error.response.data.message);
  }
};

export const allData = async () => {
  try {
    const response = await apiConnector(
      "GET",
      fetchDataOfChallengeForAdmin,
      {},
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

export const toggleChallengeSystem = async (challengeId) => {
  try {
    const response = await apiConnector(
      "PUT",
      toggleChallengeForAdmin,
      { challengeId },
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
