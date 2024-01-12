import { Skeleton, Card } from "@nextui-org/react";

const SkeletonCard = () => {
  return (
    <>
      <Card
        className="col-span-12 sm:col-span-4 h-[350px] bg-zinc-800 w-full"
        radius="lg"
      >
        <div className="space-y-3 my-8 ml-4">
          <Skeleton className="w-3/5 rounded-lg bg-zinc-900">
            <div className="h-3 w-3/5 rounded-lg bg-secondary-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg bg-zinc-900">
            <div className="h-3 w-4/5 rounded-lg bg-secondary-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg bg-zinc-900">
            <div className="h-3 w-2/5 rounded-lg bg-secondary-200"></div>
          </Skeleton>
        </div>
        <Skeleton className="rounded-none bg-zinc-900 ">
          <div className="h-64 rounded-lg bg-zinc-800"></div>
        </Skeleton>
      </Card>
    </>
  );
};

export default SkeletonCard;
