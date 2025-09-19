import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?:string;
}

function Skeleton({className}: SkeletonProps) {
  return <div className={cn("animate-pulse bg-gray-200 rounded-2xl h-32 w-52", className)}></div>;
}

export default Skeleton;
