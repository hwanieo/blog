import { Separator } from "../ui";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-center border-b border-muted-foreground/20 bg-background/30 backdrop-blur-md">
      <div className="w-full container flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-5">
          <img
            src="https://github.com/hwanieo.png"
            alt="@LOGO"
            width={28}
            height={28}
            className="rounded-full border-2 border-muted-foreground"
          />
          <div className="flex items-center gap-5">
            <div className="font-semibold text-muted-foreground hover:text-foreground transition-all duration-500 cursor-pointer">
              내 포스트
            </div>
            <Separator orientation="vertical" className="h-4!" />
            <div className="font-semibold text-muted-foreground hover:text-foreground transition-all duration-500 cursor-pointer">
              내 포스트
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-5">
        <div className="font-semibold text-muted-foreground hover:text-foreground transition-all duration-500 cursor-pointer">
          로그인
        </div>
        {/* 다크모드 토글 버튼 */}
      </div>
    </header>
  );
}

export { Header };
