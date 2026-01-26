import { SkeletonHotPost } from "../skeleton";
import fireGif from "../../assets/gifs/fire.gif";

export default function HotPost() {
  return (
    <article className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-2">
          <img src={fireGif} alt="@IMG" width={28} height={28} />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            최신 게시물
          </h4>
          <p className="md:text-sm text-muted-foreground">
            가장 최근에 생성된 블로그 게시물이에요! CATZ의 관심사를 알아보세요!
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          <SkeletonHotPost />
          <SkeletonHotPost />
          <SkeletonHotPost />
          <SkeletonHotPost />
        </div>
      </div>
    </article>
  );
}
