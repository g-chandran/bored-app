export const base_URI = "http://www.boredapi.com/api/activity";

export const typeBeans = [
  "education",
  "recreational",
  "social",
  "diy",
  "music",
  "charity",
  "cooking",
  "relaxation",
  "busywork",
];

export const PRICE = "price";

export const TYPE = "type";

export const ACCESSIBILITY = "accessibility";

export const OPTIONS = "options";

export const options = ["type", "price", "accessibility"];

export const errorMessages = {
  default: {
    title: "Take a nap",
    body: "Unexpected error occurred, please try again later",
  },
  noInternet: {
    title: "You are in a Island",
    body: "Unable to connect to the internet, please check your connection",
  },
  noActivity: {
    title: "You must be unique, but boredom is common",
    body: "Unable to find an activity for the given option, try changing the options",
  },
};
