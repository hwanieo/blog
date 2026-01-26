import { useNavigate } from "react-router";
import { ModeToggle } from "../theme";
import { Separator } from "../ui";
import { ActivityIcon } from "lucide-react";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-center border-b border-muted-foreground/5 bg-background/30 backdrop-blur-md">
      <div className="min-w-130 w-full container flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-6">
          {/* <img
            src="https://github.com/hwanieo.png"
            alt="@LOGO"
            width={28}
            height={28}
            className="rounded-full border-2 border-blue-500/20 cursor-pointer"
          /> */}
          <div
            className="p-1.5 rounded-md cursor-pointer transition-all duration-500 bg-[radial-gradient(circle,rgba(37,99,235,var(--tw-bg-opacity))_0%,transparent_100%)] [--tw-bg-opacity:0.7]"
            onClick={() => navigate("/")}
          >
            <ActivityIcon className="text-muted-foreground hover:text-foreground transition-all duration-500 cursor-pointer" />
          </div>
          <div className="flex items-center gap-5">
            <div className="font-semibold text-muted-foreground hover:text-foreground transition-all duration-500 cursor-pointer">
              게시물
            </div>
            <Separator orientation="vertical" className="h-4!" />
            <div className="font-semibold text-muted-foreground hover:text-foreground transition-all duration-500 cursor-pointer">
              포트폴리오
            </div>
            <Separator orientation="vertical" className="h-4!" />
            <div className="font-semibold text-muted-foreground hover:text-foreground transition-all duration-500 cursor-pointer">
              게시물 작성하기
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div
            className="font-semibold text-muted-foreground hover:text-foreground transition-all duration-500 cursor-pointer"
            onClick={() => navigate("/sign-in")}
          >
            로그인
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export { Header };
