import axios from "axios";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
const useCurrentUserBlog = (page, limit) => {
  const [currentUserBLogs, setCurrentUserBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalBlogs, setTotalBlogs] = useState(0);

  useEffect(() => {
    const getCurrentUserBlogs = async () => {
      await axios
        .get(
          `http://localhost:5000/blog?uid=${auth?.currentUser?.uid}&&page=${page}&&limit=${limit}`,
          {
            headers: {
              authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          if (res.data.limit === "none") {
            return;
          }
          setCurrentUserBlogs(res.data.result);
          setLoading(true);
          setTotalBlogs(res.data.count);
        })
        .catch((err) => console.log(err));
    };
    getCurrentUserBlogs();
  }, [limit, page]);
  return { currentUserBLogs, loading, setCurrentUserBlogs, totalBlogs };
};

export default useCurrentUserBlog;
