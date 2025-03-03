import { useState } from "react";
import { loginSystem } from "../../service/operations/authApi";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    await loginSystem(email, password, navigate);
  };

  return (
    <div>
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl max-md:max-w-md w-full">
          <div>
            <h2 className="lg:text-5xl text-3xl font-extrabold lg:leading-[55px] text-violet-500">
              Welcome, Admin!
            </h2>
            <p className="text-sm mt-6 text-white">
              Log in to access the dashboard, manage challenges, track
              participant progress, and streamline task assignments efficiently.
            </p>
          
          </div>

          <form className="max-w-md md:ml-auto w-full">
            <div className="space-y-4">
              <div>
                <input
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autocomplete="email"
                  required
                  className="bg-gray-100 w-full text-sm text-black px-4 py-3.5 rounded-md outline-violet-500"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autocomplete="current-password"
                  required
                  className="bg-gray-100 w-full text-sm text-black px-4 py-3.5 rounded-md outline-violet-500 "
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-violet-500 focus:ring-violet-500 border-gray-300 rounded"
                  />
                  <label
                    for="remember-me"
                    className="ml-3 block text-sm text-violet-500"
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>

            <div className="!mt-8">
              <button
                onClick={loginHandler}
                type="button"
                className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-violet-500 hover:bg-violet-400 focus:outline-none"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
