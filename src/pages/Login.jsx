import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError("Invalid Password or Email");
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
        alt="backgroud image"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="font-bold text-3xl">Sign In</h1>
            {error ? (
              <p className="text-red-700 font-bold my-2">{error}</p>
            ) : null}

            <form
              onSubmit={handleSubmit}
              className="w-full flex justify-center flex-col py-4"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 px-2 bg-gray-600"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className="mt-5 py-2 px-2 bg-gray-600"
              />
              <button className="bg-red-600 mt-6 mb-2 py-3 font-bold rounded-md text-center hover:bg-red-800 transition duration-300 ease-in-out">
                Sign In
              </button>

              <p className="text-center text-gray-500">OR</p>

              <button className="mt-3 p-2 rounded-md bg-gray-500/50">
                Use a Sign-in Code
              </button>

              <button className="my-4">Forgot Password?</button>

              <div className="flex justify-between items-center text-sm">
                <p>
                  <input
                    type="checkbox"
                    onChange={handleRememberMeChange}
                    className="mr-1.5"
                  />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
