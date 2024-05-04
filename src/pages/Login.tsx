import { useState } from "react";
import { useAppDispatch } from "../store";
import { login } from "../store/slices/authSlice";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      toast.error("Please enter email and password");
      return;
    }

    dispatch(login("You Are Authenticated"));
  };

  return (
    <div className="antialiased bg-gray-950 text-gray-900 font-sans">
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-gray-300 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">
                Username or Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                placeholder="Username or Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 md:w-full">
              <label htmlFor="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-[rgb(15,16,16)] text-white uppercase text-sm font-semibold px-4 py-2 rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
