import axios from "axios";

export default axios.create({
baseURL : 'https://movies-api-dockerhub.onrender.com/',
headers: {
    "Access-Control-Allow-Origin": "*", // Set the allowed origin(s) here or use a specific domain
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", // Add allowed HTTP methods
    "Access-Control-Allow-Headers": "Content-Type, Authorization", // Add allowed headers
  }, 



});