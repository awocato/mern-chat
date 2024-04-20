import { Skeleton } from "./ui/skeleton";

function UserCardSkeleton() {
  return (
    <div className=" flex items-center pb-1 ">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-[115px]" />
        <Skeleton className="h-4 w-[85px]" />
      </div>
    </div>
  );
}

export default UserCardSkeleton;
