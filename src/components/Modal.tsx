import { X } from "lucide-react";
import { type ReactNode } from "react";

type ModalProps = {
  children: ReactNode,
  open:boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

function Modal({ children, open, setOpen }: ModalProps) {
  return (
    <dialog className="modal" open={open} onClose={() => setOpen(false)}>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <X />
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
}

export default Modal;
