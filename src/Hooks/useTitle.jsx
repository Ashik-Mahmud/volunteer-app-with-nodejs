import { useEffect, useState } from "react";

const useTitle = (titleText) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = title + "- Volunteers Application";
    setTitle(titleText);
  }, [titleText, title]);
  return [title, setTitle];
};

export default useTitle;
