import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";

export const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="bg-slate-950">
        <div>
          <Auth type={"signup"} />
        </div>
      </div>
      <div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};
