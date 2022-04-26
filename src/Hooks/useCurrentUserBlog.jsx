import axios from "axios";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
const useCurrentUserBlog = () => {
  const [currentUserBLogs, setCurrentUserBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCurrentUserBlogs = async () => {
      await axios
        .get(`http://localhost:5000/blog?uid=${auth?.currentUser?.uid}`, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setCurrentUserBlogs(res.data);
          setLoading(true);
        })
        .catch((err) => console.log(err));
    };
    getCurrentUserBlogs();
  }, []);
  return { currentUserBLogs, loading };
};

export default useCurrentUserBlog;
