import Header from "./Header";
import { useState, useRef } from "react";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_PAGE_BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleFormSubmitButton = () => {
    const message = validateForm(email.current.value, password.current.value);
    setError(message);

    if (message) return;

    if (!isSignInPage) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          //here i am updating the user profile with the entered values.
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              //performing dispatch action here => when user is varifies this will update the profile of the user.
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignUp = () => {
    setIsSignInPage(!isSignInPage);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      <img
        className="h-full w-full object-cover"
        src= { LOGIN_PAGE_BACKGROUND_IMAGE }
        alt="background"
      />

      <div className="absolute top-1/2 left-1/2 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white p-6 sm:p-10 rounded-lg shadow-lg">
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="text-2xl sm:text-3xl font-bold block mb-6">
            {isSignInPage ? "Sign In" : "Sign Up"}
          </label>

          {!isSignInPage && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Full Name"
              className="border w-full rounded-sm p-3 block mt-6 bg-[#3534345d]"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="border w-full rounded-sm p-3 my-4 block bg-[#3534345d]"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="border w-full rounded-sm p-3 bg-[#3534345d]"
          />

          <p className="text-red-600 font-bold mt-3">{error}</p>

          <button
            onClick={handleFormSubmitButton}
            className="w-full p-3 bg-[#c90d0dde] mt-4 rounded-sm font-semibold cursor-pointer"
          >
            {isSignInPage ? "Sign In" : "Sign Up"}
          </button>

          <div className="mt-6 text-sm sm:text-base">
            {isSignInPage ? (
              <p>
                New to Netflix?
                <span
                  className="font-semibold cursor-pointer hover:text-[#c90d0dde] ml-1"
                  onClick={handleSignUp}
                >
                  Sign Up Now.
                </span>
              </p>
            ) : (
              <p>
                Already a User?
                <span
                  className="font-semibold cursor-pointer hover:text-[#c90d0dde] ml-1"
                  onClick={handleSignUp}
                >
                  Sign In Now.
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
