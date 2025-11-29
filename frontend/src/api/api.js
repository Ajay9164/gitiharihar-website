import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://gitiharihar-web.onrender.com/api/"
});

export const fetchTrades = async () => {
  try {
    const { data } = await API.get("/trades");
    return data;
  } catch (error) {
    console.error("Error fetching trades:", error);
    return [];
  }
};

export const fetchFaculties = async () => {
  try {
    const { data } = await API.get("/faculties");
    return data;
  } catch (error) {
    console.error("Error fetching faculties:", error);
    return [];
  }
};
