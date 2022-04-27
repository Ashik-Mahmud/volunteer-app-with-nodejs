import axios from "axios";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getEventsData = async () => {
      await axios
        .get(
          `https://volunteers-app-server.herokuapp.com/events?uid=${auth?.currentUser?.uid}`,
          {
            headers: {
              authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          setEvents(res.data);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getEventsData();
  }, []);
  return { events, setEvents, loading };
};

export default useEvents;
