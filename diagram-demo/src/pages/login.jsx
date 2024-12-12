import { useNavigate } from "react-router";
import icon from "../assets/home.png";
const Login = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-[#f5f5f8] h-screen flex items-center justify-center">
      <div>
        <div className="w-[500px] shadow-xl bg-white py-[30px] px-[20px] flex flex-col items-center rounded-lg mb-[30px]">
          <img src={icon} alt="" className="w-[50px] h-[50px] mb-[15px]" />
          <div className="text-[20px] mb-[15px] font-bold">Sing In</div>
          <div className="mb-[30px]">Let Start Creating!</div>
          <input
            className="rounded border-2 border-[#f0f0f0] w-full p-[5px] mb-[10px] focus:outline-none"
            placeholder="Email Address"
          />
          <input
            className="rounded border-2 border-[#f0f0f0] w-full p-[5px] mb-[10px] focus:outline-none"
            placeholder="Password"
          />
          <button
            className="rounded bg-[#1a69ca] w-full h-[38px] text-white mb-[10px]"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Sign in
          </button>
          <div className="w-full border-t-2 border-[#f0f0f0] mb-[10px]" />
          <button className="rounded border-2 border-[#f0f0f0] w-full h-[38px] text-[#5e606a] mb-[20px]">
            <div className="flex justify-center gap-[10px]">
              <img src={icon} alt="" className="w-[20px] h-[20px]" />
              <div>Sign Up with Google</div>
            </div>
          </button>
          <div className="text-[#41388a] cursor-pointer" onClick={() => {}}>
            Forgot Password?
          </div>
        </div>
        <div className="flex justify-center">
          Don't help accout yet?{" "}
          <span
            className="text-[#41388a] cursor-pointer"
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
