import axios from "axios";
import { useEffect, useState } from "react";
const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getBlogs = async () => {
      await axios
        .get(`http://localhost:5000/blogs`)
        .then((res) => {
          setBlogs(res.data);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getBlogs();
  }, []);
  return { blogs, loading };
};

export default useBlogs;
