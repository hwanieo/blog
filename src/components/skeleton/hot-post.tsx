// import { Skeleton } from "../ui";

function SkeletonHotPost() {
  return (
    <div className="w-full flex flex-col gap-2 group">
      {/* <Skeleton className="w-full h-70" /> */}
      <div className="w-full h-70 bg-[conic-gradient(--theme(--color-blue-700/0.35),--theme(--color-blue-800/0.15),transparent)] dark:bg-[conic-gradient(--theme(--color-blue-900/0.45),--theme(--color-blue-950/0.25),transparent)] group-hover:scale-105 transition-all duration-500"></div>
    </div>
  );
}

export { SkeletonHotPost };
