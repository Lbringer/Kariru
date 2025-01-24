import { useNavigate } from "react-router";
import { FormInput } from "../components/FormInput";
import { Logo } from "../components/Logo";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-3xl font-medium">Welcome</div>
      <Logo />
      <FormInput id="name" type="text" label="Name" />
      <FormInput id="email" type="email" label="Email" />
      <FormInput id="address" type="text" label="Address" />
      <FormInput id="password" type="password" label="Password" />
      <button className="mt-4 bg-slate-900 text-sm font-medium text-slate-50 px-5 py-3 rounded-md w-1/4">
        Register
      </button>
      <div className="text-xs mt-1">
        Already have an account?{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </div>
    </div>
  );
};
