import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api" // backend server
});

// Make sure we return response.data (not the full response object)
export const fetchTrades = async () => {
  try {
    const { data } = await API.get("/trades");
    console.log("Trades from backend:", data); // 👀 Debug log
    return data;
  } catch (error) {
    console.error("Error fetching trades:", error);
    return [];
  }
};

export const fetchFaculties = async () => {
  try {
    const { data } = await API.get("/faculties");
    console.log("Faculties from backend:", data); // 👀 Debug log
    return data;
  } catch (error) {
    console.error("Error fetching faculties:", error);
    return [];
  }
};
