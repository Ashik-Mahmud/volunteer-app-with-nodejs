import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const socialSignIn = async (provider) => {
    await signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(true);
      })
      .catch((err) => {
        console.log(err.message);
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
