import { Bell, BookOpen, Hourglass, User } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="fixed left-0 w-[70px] h-screen bg-slate-50 border-r border-slate-200 flex flex-col items-center justify-between py-20">
      <div>
        <div className="mb-10 cursor-pointer">
          <Bell />
        </div>
        <div className="mb-10 cursor-pointer">
          <BookOpen />
        </div>
        <div className="mb-10 cursor-pointer">
          <Hourglass />
        </div>
        <div className="mb-10 cursor-pointer">
          <User />
        </div>
      </div>
      <div className="rotate-90 font-medium justify-self-center">
        kar<span className="font-black">iru.</span>
      </div>
    </div>
  );
};
