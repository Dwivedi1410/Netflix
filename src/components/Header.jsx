import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { HEADER_LOGO, USER_PROFILE_ICON } from "../utils/constants";



const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when the component unmount.
    return () => unsubscribe();
  }, []);

  const handleSignOutButtonClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black px-4 py-3 flex justify-between">
      <img
        className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36"
        src= { HEADER_LOGO }
        alt="Netflix logo"
      />
      {
        user && (<div className="flex items-center space-x-2">
          <img src= {USER_PROFILE_ICON} className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-lg"/>
          <button onClick={handleSignOutButtonClick} className="text-amber-50">
            SignOut
          </button>
        </div>)
      }
    </div>
  );
};

export default Header;
