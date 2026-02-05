// import { Skeleton } from "../ui";

function SkeletonPortfolio() {
  return (
    // <Skeleton className="w-full h-85" />
    // <div className="w-full h-85 bg-[radial-gradient(circle_at_center,--theme(--color-blue-700/0.35),--theme(--color-blue-800/0.15),transparent)] dark:bg-[radial-gradient(circle_at_center,--theme(--color-blue-900/0.45),--theme(--color-blue-950/0.25),transparent)]"></div>
    <div className="group">
      <div className="w-full h-85 bg-[conic-gradient(--theme(--color-blue-700/0.35),--theme(--color-blue-800/0.15),transparent)] dark:bg-[conic-gradient(--theme(--color-blue-900/0.45),--theme(--color-blue-950/0.25),transparent)] group-hover:scale-105 transition-all duration-500"></div>
    </div>
  );
}

export { SkeletonPortfolio };
