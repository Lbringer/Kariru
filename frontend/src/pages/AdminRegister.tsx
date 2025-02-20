import { Loader } from "@/components/ui/Loader";
import { FormInput } from "../components/FormInput";
import { Logo } from "../components/Logo";
import { useRegister } from "@/hooks";

export const AdminRegister = () => {
  const { data, setData, handleClick, loading, navigate } =
    useRegister("admin");
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-3xl font-medium">Glad to have you onboard</div>
      <Logo />
      <FormInput
        id="name"
        type="text"
        label="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <FormInput
        id="email"
        type="email"
        label="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <FormInput
        id="address"
        type="text"
        label="Address"
        onChange={(e) => setData({ ...data, address: e.target.value })}
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
        Register
      </button>
      <div className="text-xs mt-1">
        Already have an account?{" "}
        <span
          className="underline cursor-pointer font-medium"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </div>
      <div className="text-xs fixed right-20 top-20">
        Are you a user?{" "}
        <span
          className="underline cursor-pointer font-medium"
          onClick={() => navigate("/register")}
        >
          Register as User
        </span>
      </div>
    </div>
  );
};
