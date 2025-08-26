import { Check } from "lucide-react"
import { Button } from "./ui/button"


function ModalSubmit({
    onClick
}: {
    onClick: () => void
}) {
  return (
     <div className="flex gap-2 justify-end">
            <Button variant={"outline"} type="button" onClick={onClick}>Cancel</Button>
            <Button>Confirm <Check /></Button>
        </div>
  )
}

export default ModalSubmit