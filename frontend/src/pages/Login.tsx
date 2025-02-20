import { useLogin } from "@/hooks";
import { FormInput } from "../components/FormInput";
import { Logo } from "../components/Logo";
import { Loader } from "@/components/ui/Loader";

export const Login = () => {
  const { data, setData, handleClick, loading, navigate } = useLogin();
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-3xl font-medium">Welcome back</div>
      <Logo />
      <FormInput
        id="email"
        type="email"
        label="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <FormInput
        id="password"
        type="password"
        label="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button
        className="mt-4 bg-slate-900 text-sm font-medium text-slate-50 px-5 py-3 rounded-md w-1/4"
        onClick={handleClick}
      >
        Login
      </button>
      <div className="text-xs mt-1">
        Dont have an account?{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </div>
    </div>
  );
};
