import axios from "axios";
import { useEffect, useState } from "react";
const useVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getVolunteersData = async () => {
      await axios
        .get(`https://volunteer-app-v1.onrender.com/volunteers`)
        .then((res) => {
          setLoading(true);
          setVolunteers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getVolunteersData();
  }, []);
  return { volunteers, loading, setVolunteers, setLoading };
};

export default useVolunteers;
