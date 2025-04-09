import Header from "./Header";
import { useState, useRef } from "react";
import { validateForm } from "../utils/validate";


const Login = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);

  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmitButton = () => {
    const message = validateForm(email.current.value, password.current.value);
    setError(message);

  }

  const handleSignUp = () => {
    setIsSignInPage(!isSignInPage);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      {/* Background Image */}
      <img
        className="h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
        alt="background"
      />

      {/* Form Container */}
      <div className="absolute top-1/2 left-1/2 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white p-6 sm:p-10 rounded-lg shadow-lg">
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="text-2xl sm:text-3xl font-bold block mb-6">
            {isSignInPage ? "Sign In" : "Sign Up"}
          </label>

          {!isSignInPage && (
            <input
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
            type="submit"
            className="w-full p-3 bg-[#c90d0dde] mt-4 rounded-sm font-semibold cursor-pointer"
            onClick = {handleFormSubmitButton}
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
