import NewGroup from "@/features/groups/NewGroup";
import { getGroups } from "@/api/group.service";
import type { Group } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useState } from "react";
import GroupItem from "@/features/groups/GroupItem";
import Skeleton from "@/components/skeleton";
import Dialog from "@/components/Dialog";

function GroupsPage() {
  const { data, isFetching } = useQuery<unknown, unknown, Group[]>({
    queryKey: ["groups"],
    queryFn: getGroups,
  });
  const [isOpen, setIsOpen] = useState(false);
  const toggleDialog = () => setIsOpen(prev => !prev);
  return (
    <>
      <Dialog open={isOpen} setOpen={toggleDialog}>
        <NewGroup toggleDialog={toggleDialog} />
      </Dialog>
      <section>
        <div className="md:flex md:justify-between md:items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">Your Groups</h1>
            <h4 className=" text-gray-500 my-3">
              Manage your expense sharing groups.
            </h4>
          </div>
          <button className="button gap-3 text-sm" onClick={toggleDialog}>
            <Plus size={16} /> Create Group
          </button>
        </div>

        {isFetching && <Skeleton />}
        <ul className="space-y-2">
          {data?.length === 0 ? (
            <p className="text-gray-500 font-medium h-[50vh] flex justify-center items-center">
              No Groups to display
            </p>
          ) : (
            data?.map((group) => <GroupItem key={group.id} group={group} />)
          )}
        </ul>
      </section>
    </>
  );
}

export default GroupsPage;
