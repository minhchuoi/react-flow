import { useNavigate } from "react-router";
import icon from "../assets/home.png";
import { Button, Input } from "antd";
const Register = () => {
  let navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div className="w-[800px] grid grid-cols-2  shadow-xl rounded-lg">
          <div className="bg-[#1a69ca] py-[30px] pl-[20px] rounded-l-lg">
            <div className="text-2xl text-white	pb-[40px]">
              One account, endless productivity
            </div>
            <div className="grid grid-cols-2 gap-[10px] pb-[60px]">
              <div className="flex min-w-[80px] gap-[20px]">
                <div className="rounded flex justify-center items-center w-[40px] h-[40px] bg-[#4aa4e2]">
                  <img src={icon} alt="" className="w-[15px] h-[15px]" />
                </div>
                <div className="text-sm	 text-white flex items-center">
                  Flowchart
                </div>
              </div>
              <div className="flex min-w-[80px] gap-[20px]">
                <div className="rounded flex justify-center items-center w-[40px] h-[40px] bg-[#ffa935]">
                  <img src={icon} alt="" className="w-[15px] h-[15px]" />
                </div>
                <div className="text-sm	 text-white flex items-center">
                  Notes
                </div>
              </div>
              <div className="flex min-w-[80px] gap-[20px]">
                <div className="rounded flex justify-center items-center w-[40px] h-[40px] bg-[#f6812d]">
                  <img src={icon} alt="" className="w-[15px] h-[15px]" />
                </div>
                <div className="text-sm	 text-white flex items-center">
                  Mind Map
                </div>
              </div>
              <div className="flex min-w-[80px] gap-[20px]">
                <div className="rounded flex justify-center items-center w-[40px] h-[40px] bg-[#50c095]">
                  <img src={icon} alt="" className="w-[15px] h-[15px]" />
                </div>
                <div className="text-sm	 text-white flex items-center">Task</div>
              </div>
              <div className="flex min-w-[80px] gap-[20px]">
                <div className="rounded flex justify-center items-center w-[40px] h-[40px] bg-[#eb4848]">
                  <img src={icon} alt="" className="w-[15px] h-[15px]" />
                </div>
                <div className="text-sm	 text-white flex items-center">
                  Whiteboard
                </div>
              </div>
              <div className="flex min-w-[80px] gap-[20px]">
                <div className="rounded flex justify-center items-center w-[40px] h-[40px] bg-[#20c9d2]">
                  <img src={icon} alt="" className="w-[15px] h-[15px]" />
                </div>
                <div className="text-sm	 text-white flex items-center">OKR</div>
              </div>
              <div className="flex min-w-[80px] gap-[20px]">
                <div className="rounded flex justify-center items-center w-[40px] h-[40px] bg-[#ee57c1]">
                  <img src={icon} alt="" className="w-[15px] h-[15px]" />
                </div>
                <div className="text-sm	 text-white flex items-center">
                  Sounds
                </div>
              </div>
            </div>
            <div className="text-sm	 text-white ">
              Trusted by +1.6M users wordwide
            </div>
          </div>
          <div className=" bg-slate-50 py-[30px] px-[20px] flex flex-col items-center rounded-r-lg">
            <img src={icon} alt="" className="w-[50px] h-[50px] mb-[15px]" />
            <div className="text-[20px] mb-[15px] font-bold">
              Let's get started!
            </div>
            <div className="mb-[20px]">Create your FREE account now</div>
            <Input
              className="rounded border-2 border-[#f0f0f0] w-full p-[5px] mb-[10px] focus:outline-none"
              placeholder="Email Address"
            />
            <Input
              className="rounded border-2 border-[#f0f0f0] w-full p-[5px] mb-[10px] focus:outline-none"
              placeholder="Password"
            />
            <Button className="rounded bg-[#1a69ca] w-full h-[38px] text-white mb-[10px]">
              Sign Up
            </Button>
            <div className="w-full border-t-2 border-[#f0f0f0] mb-[10px]" />
            <Button className="rounded border-2 border-[#f0f0f0] w-full h-[38px] text-[#5e606a] mb-[10px]">
              <div className="flex justify-center gap-[10px]">
                <img src={icon} alt="" className="w-[20px] h-[20px]" />
                <div>Sign Up with Google</div>
              </div>
            </Button>
            <div>
              By signing up, you agree to the{" "}
              <span
                className="text-[#41388a] cursor-pointer"
                onClick={() => {}}
              >
                Terms of Use
              </span>
            </div>
          </div>
        </div>
        <div className="w-[800px] grid grid-cols-2 mt-[20px]">
          <div />
          <div className="flex justify-center">
            Already have account?{" "}
            <span
              className="text-[#41388a] cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
