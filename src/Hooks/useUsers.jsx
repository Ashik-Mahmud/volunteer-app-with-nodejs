import axios from "axios";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await axios
        .get(
          `https://volunteer-app-v1.onrender.com/users?uid=${auth?.currentUser?.uid}`,
          {
            headers: {
              authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          setLoading(true);
          setUsers(res.data);
        });
    })();
  }, []);
  return { users, loading, setUsers };
};

export default useUsers;
