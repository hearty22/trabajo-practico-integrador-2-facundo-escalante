import { useState } from "react";

export const useProfile = (initialValue) => {
  const [profile, setProfile] = useState(initialValue);
  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/profile",{
        method: "GET",
        credentials: "include"
      });
      const data = await response.json();
      return data;
    } catch (error) {
      const data = error;
      return data;
    }
  };
  
  return {
    profile,
    setProfile,
    getProfile,
  };
};
