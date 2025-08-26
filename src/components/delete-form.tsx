import { Trash } from "lucide-react"
import { Button } from "./ui/button"
import type { Dispatch, SetStateAction } from "react";

interface DeleteFormProps {
deleteFunction: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}


function DeleteForm({
    deleteFunction,
    setIsOpen
}: DeleteFormProps) {
  return (
   <div className="flex gap-2 justify-end">
    <Button variant={"outline"} onClick={() => setIsOpen(false)} type="button">
        Cancel
    </Button>
    <Button variant={"destructive"} onClick={deleteFunction}>
        <Trash /> Confirm
    </Button>
   </div>
  )
}

export default DeleteForm