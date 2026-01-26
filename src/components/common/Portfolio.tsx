import { SkeletonPortfolio } from "../skeleton";
import writingHandGif from "../../assets/gifs/writing-hand.gif";

export default function Portfolio() {
  return (
    <article className="w-full flex flex-col gap-6 mt-5">
      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-2">
          <img src={writingHandGif} alt="@IMG" width={28} height={28} />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            포트폴리오
          </h4>
          <p className="md:text-sm text-muted-foreground">
            CATZ가 진행한 프로젝트를 탐색해보세요! 기본기를 가장 중요시 합니다!
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
          <SkeletonPortfolio />
          <SkeletonPortfolio />
          <SkeletonPortfolio />
          <SkeletonPortfolio />
        </div>
      </div>
    </article>
  );
}
