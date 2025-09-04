import { serverUrl } from "@/App";
import { setUserData } from "@/redux/userSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function getCurrentUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(serverUrl + "/api/user/getcurrentuser", {
          withCredentials: true,
        });

        console.log(result.data)

        dispatch(setUserData(result.data.data));
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null));
      }
    };

    // Caliinh function
    fetchUser();
  }, []);
}
