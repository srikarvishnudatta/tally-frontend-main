import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?:string;
}

function Skeleton({className}: SkeletonProps) {
  return <div className={cn("skeleton h-32 w-32", className)}></div>;
}

export default Skeleton;
