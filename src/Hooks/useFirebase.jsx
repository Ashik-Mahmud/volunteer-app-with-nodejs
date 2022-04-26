import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../Firebase/Firebase.config";
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const socialSignIn = async (provider) => {
    await signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(true);
        toast.success("Sign In successfully done.");
      })
      .catch((err) => {
        toast.error(err.message.split(":")[1]);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      user?.uid ? setIsAuth(true) : setIsAuth(false);
    });
  }, []);

  return { socialSignIn, user, loading, isAuth };
};

export default useFirebase;
