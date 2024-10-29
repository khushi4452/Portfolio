import {  useState, useEffect } from "react";
import axios from "axios";


export const UserContext = createContext();

function UserProvider({ children }) {
 const [users, setUsers] = useState([])
 useEffect(() => {
const fetchApiData = async () => {
 try {
 const response = await axios.get(
 "https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e"
 );
 setUsers(response.data); 
 console.log("Fetched users:", response.data); 
} catch (error) {
 console.log("Error fetching the user data", error);
  }
};

fetchApiData();
}, []);
