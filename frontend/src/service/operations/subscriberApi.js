import { subscriberEndpoints } from "../api";
import { apiConnector } from "../apiConnector";

const { createSubscriber, deleteSubscriber, fetchDataOfSubscriber } =
  subscriberEndpoints;

const token = JSON.parse(localStorage.getItem("token"));

export const createSubscriberSystem = async (email) => {
  try {
    const response = await apiConnector("POST", createSubscriber, { email });

    if (!response.data.success) {
      console.log(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const deleteSubscriberSystem = async (subscriberId) => {
  try {
    const response = await apiConnector(
      "DELETE",
      deleteSubscriber,
      { subscriberId },
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

export const subscriberDataSystem = async () => {
  try {
    const response = await apiConnector(
      "GET",
      fetchDataOfSubscriber,
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
