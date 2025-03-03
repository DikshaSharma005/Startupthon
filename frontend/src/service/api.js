// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "https://startupthon-dp34.onrender.com/api/v1";

export const authEndpoints = {
  login: BASE_URL + "/users/login",
};

export const challengesEndpoints = {
  createChallenge: BASE_URL + "/challenges/add-challenge",
  fetchDataOfChallengeForAdmin: BASE_URL + "/challenges/all-data-challenge",
  fetchDataOfChallengeForPublic: BASE_URL + "/challenges/data-challenge",
  toggleChallengeForAdmin: BASE_URL + "/challenges/toggle-challenge",
  deleteChallengeForAdmin: BASE_URL + "/challenges/delete-challenge",
};

export const completerEndpoints = {
  createCompleter: BASE_URL + "/completers/add-completer",
  fetchDataOfCompleter: BASE_URL + "/completers/data-completer",
  deleteCompleter: BASE_URL + "/completers/delete-completer",
};

export const founderEndpoints = {
  createFounder: BASE_URL + "/founders/add-founder",
  fetchDataOfFounder: BASE_URL + "/founders/data-founder",
  deleteFounder: BASE_URL + "/founders/delete-founder",
};

export const subscriberEndpoints = {
  createSubscriber: BASE_URL + "/subscribers/add-email",
  fetchDataOfSubscriber: BASE_URL + "/subscribers/fetch-email",
  deleteSubscriber: BASE_URL + "/subscribers/delete-email",
};
